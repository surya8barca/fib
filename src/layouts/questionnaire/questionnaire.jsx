import React from 'react';
import './questionnaire.css'
import { Box } from '@mui/system';
import RadioGroupInput from './inputComponents/radioGroup';
import CheckboxGroupInput from './inputComponents/checkboxGroup';
import InputField from './inputComponents/inputField';
import DropdownInput from './inputComponents/dropdown';

function Questionnaire(props) {

    const questionsData=props.data

    return (
        <>
            <Box>
                <>
                {questionsData.map((element,index)=>(
                    <div className="questionBox">
                        <span style={{fontWeight:'bold'}}>{element.questionNo}. {element.question}</span>
                        {/* answer section */}
                        {/* 1. For radio elements */}
                        {element.type==='radio' &&
                           <RadioGroupInput data={element}/>
                        }
                        {/* 2. For check boxes */}
                        {element.type==='checkbox' &&
                        <CheckboxGroupInput data={element}/>
                        }
                        {/* for dropdowm select */}
                        {element.type==='dropdown' &&
                        <DropdownInput data={element}/>
                        }
                        {/* for form field */}
                        {element.type.includes('formfield') &&
                        <InputField data={element}/>
                        }
                    </div>    
                ))}
                </>
            </Box>            
        </>
    );
}
export default Questionnaire;