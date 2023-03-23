import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';

function LoadingSpinner(props) {

    let loadSpinner=props.loadSpinner;


    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loadSpinner}
                onClick={()=>{loadSpinner=false}}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default LoadingSpinner;