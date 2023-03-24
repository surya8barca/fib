import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormGroup } from '@mui/material';

function DropdownInput(props) {

    const data = props.data;
    return (
        <>
            <FormGroup style={{marginTop:'10px'}} row>
                <Select style={{minWidth:'25%'}} autoWidth size='small'>
                    {data.options.map((option) => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
                </Select>
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

export default DropdownInput;