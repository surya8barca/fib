import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckboxGroupInput from './checkboxGroup';
import DropdownInput from './dropdown';
import InputField from './inputField';

function RadioGroupInput(props) {
    const data = props.data;
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            {data.nestedQuestion && <span style={{ fontWeight: 'bold' }}>{data.question}</span>}
            <RadioGroup style={{ marginTop: '10px' }} row value={value} onChange={handleChange}>
                {data.options.map((option, index) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                ))}
            </RadioGroup>
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

export default RadioGroupInput;