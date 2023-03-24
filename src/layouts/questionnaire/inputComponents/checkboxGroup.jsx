import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function CheckboxGroupInput(props) {
    const data = props.data;
    return (
        <>
            <FormGroup style={{marginTop:'10px'}} row>
                {data.options.map((option, index) => (
                    <FormControlLabel control={<Checkbox />} value={option} label={option} />
                ))}
            </FormGroup>
            {/* checking condition */}
            {data.conditional && 
            <>
                Conditional
            </>
            }
        </>
    );
}

export default CheckboxGroupInput;