import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import RadioGroupInput from './radioGroup';
import DropdownInput from './dropdown';
import CheckboxGroupInput from './checkboxGroup';

function InputField(props) {
    const data = props.data;
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            {data.nestedQuestion &&<span style={{fontWeight:'bold'}}>{data.question}</span>}
            <FormGroup style={{marginTop:'10px'}} row>
                <TextField value={value} onChange={handleChange} type={data.type.split('-')[1]} variant="outlined" size="small" />
            </FormGroup>
            {/* checking condition */}
            {(data.conditional && value === data.selecionTrigger) &&
                <>
                    {data.conditionData.map((data, index) => (
                        <>
                            {/* textfield case */}
                            {data.type.includes('formfield') && <InputField data={data} />}
                            {/* radio case */}
                            {data.type === ('radio') && <RadioGroupInput data={data} />}
                            {/* checkbox case */}
                            {data.type === ('checkbox') && <CheckboxGroupInput data={data} />}
                            {/* dropdown case */}
                            {data.type === ('dropdown') && <DropdownInput data={data} />}
                        </>
                    ))}
                </>
            }
        </>
    );
}

export default InputField;