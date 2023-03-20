import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

function NavBar() {
    return (
        <Box>
            <Toolbar sx={{marginLeft:'50px',backgroundColor:'red'}}>
                <Typography variant="h6" noWrap component="div">
                    Mini variant drawer can you hear me
                </Typography>
            </Toolbar>
        </Box>
    );
}

export default NavBar;