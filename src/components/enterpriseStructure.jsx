import * as React from 'react';
import Banner from '../layouts/header/banner';
import Toaster from '../layouts/toaster/toaster'
import Button from '@mui/material/Button';
import LoadingSpinner from '../layouts/overlaySpinner/loadingSpinner';
import * as data from '../assets/data/staticData.ts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const tableStyle={
    width: '97%',
    borderSpacing:0,
    borderCollapse:'separate',
    fontStyle:'Graphik',
}

const headerStyle={
    color:'white',
    borderRight:'solid 1px #f0f0f5',
    padding:'15px 10px',
    fontSize:'15px',
}

const dataStyle={
    border: 'solid 1px #f0f0f5',
    fontStyle:'Graphik',
}

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
        <div style={{margin:'40px'}}>
            {/* <Button 
            onClick={sendToaster}>Hello</Button>
            <Button onClick={()=>{toggleToaster(false)}}>Close</Button> */}
            <TableContainer>
                <Table sx={tableStyle} size='small'>
                <TableHead sx={{backgroundColor:'grey',borderRadius:'20px'}}>
                    <TableRow>
                        <TableCell sx={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}} style={headerStyle} align="center">S No.</TableCell>
                        <TableCell style={headerStyle} align="center">Design</TableCell>
                        <TableCell sx={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}} style={headerStyle} align="center">Inputs</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.Enterprise_Structure.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell style={dataStyle} align="center">{row.SNo}</TableCell>
                    <TableCell style={dataStyle} align="center">{row.Design}</TableCell>
                    <TableCell style={dataStyle} align="center">
                        <>
                        {/* for links */}
                        {row.type==='link' && 
                        <Button style={{cursor:'pointer',fontSize:'12px'}}>{row.Inputs}</Button>
                        }
                        {/* for dropdowns */}
                        {row.type==='dropdown' && 
                            <FormControl sx={{width:'60%'}}>
                            <InputLabel>{row.Inputs}</InputLabel>
                            <Select
                            label={row.Inputs}
                            >
                            {row.options.map((option)=>(
                                <MenuItem value={option}>{option}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        }
                        </>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
        </>
    );
};


export default EnterpriseStructure;