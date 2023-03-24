import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function RadioGroupInput(props) {
    const data = props.data;
    return (
        <>
            <RadioGroup style={{marginTop:'10px'}} row>
                {data.options.map((option, index) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                ))}
            </RadioGroup>
            {/* checking condition */}
            {data.conditional && 
            <>
                Conditional
            </>
            }
        </>
    );
}

export default RadioGroupInput;