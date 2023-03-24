import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

function InputField(props) {
    const data = props.data;
    return (
        <>
            <FormGroup style={{marginTop:'10px'}} row>
                <TextField type={data.type.split('-')[1]} variant="outlined" size="small" />
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

export default InputField;