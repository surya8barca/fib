import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormGroup } from '@mui/material';
import InputField from './inputField';
import CheckboxGroupInput from './checkboxGroup';
import RadioGroupInput from './radioGroup';

function DropdownInput(props) {

    const data = props.data;
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            {data.nestedQuestion &&<span style={{fontWeight:'bold'}}>{data.question}</span>}
            <FormGroup style={{marginTop:'10px'}} row>
                <Select style={{minWidth:'25%'}} autoWidth size='small'value={value} onChange={handleChange}>
                    {data.options.map((option) => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
                </Select>
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

export default DropdownInput;