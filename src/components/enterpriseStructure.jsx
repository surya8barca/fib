import * as React from 'react';
import Banner from '../layouts/header/banner';
import Toaster from '../layouts/toaster/toaster'
import Button from '@mui/material/Button';
import LoadingSpinner from '../layouts/overlaySpinner/loadingSpinner';
import * as data from '../assets/data/staticData.ts';

const EnterpriseStructure =() => {

    // state variable
    const [spinnerState,toggleSpinner]=React.useState(false);
    const [toasterData,setToasterData]=React.useState({});
    const [toasterState,toggleToaster]=React.useState(false);



    React.useEffect(()=>{
        console.log("Enter Prise Structure")
        console.log(data.Enterprise_Structure)
    })
    const sendToaster=()=>{
        // toggleSpinner(true)
        setToasterData({
            message:'Accenture',type:'success',timeOut:3000
        })
        toggleToaster(true);
    }

    return (
        <>
        <Toaster toasterOpen={toasterState} data={toasterData}></Toaster>
        <LoadingSpinner loadSpinner={spinnerState}></LoadingSpinner>
        <Banner title="Enterprise Structure"></Banner>
        <div className="content">
            <Button 
            onClick={sendToaster}>Hello</Button>
            <Button onClick={()=>{toggleToaster(false)}}>Close</Button>
        </div>
        </>
    );
};


export default EnterpriseStructure;