import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import InputField from './inputField';
import RadioGroupInput from './radioGroup';
import DropdownInput from './dropdown';

function CheckboxGroupInput(props) {
    const data = props.data;
    const [selectedValues,setSelected]=React.useState([]);

    const handleCheck = (event) => {
        var updatedList = [...selectedValues];
        if (event.target.checked) {
          updatedList = [...selectedValues, event.target.value];
        } else {
          updatedList.splice(selectedValues.indexOf(event.target.value), 1);
        }
        setSelected(updatedList);
      };

    return (
        <>
            {data.nestedQuestion &&<span style={{fontWeight:'bold'}}>{data.question}</span>}
            <FormGroup style={{marginTop:'10px'}} row >
                {data.options.map((option, index) => (
                    <FormControlLabel onChange={handleCheck} control={<Checkbox />} value={option} label={option} />
                ))}
            </FormGroup>
            {/* checking condition */}
            {(data.conditional && selectedValues.includes(data.selecionTrigger) ) &&
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

export default CheckboxGroupInput;