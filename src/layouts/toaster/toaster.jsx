import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Toaster(props) {

    const message=props.data.message;
    const type=props.data.type;
    const timeOut=props.data.timeOut;
    let toasterOpen=props.toasterOpen;

  const handleClose = () => {
    toasterOpen=false;
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'right' }}
        open={toasterOpen}
        autoHideDuration={timeOut?timeOut:3000}
        onClose={handleClose}>
            <Alert onClose={handleClose} severity={type?type:'success'} sx={{ width: '100%' }}>
          {message?message:"Hello!!"}
        </Alert>
        </Snackbar>
    </div>
  );
}