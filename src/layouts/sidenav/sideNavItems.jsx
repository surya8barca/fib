import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import MaterialIcon from 'material-icons-react';


let screens=[
    {name:'Enterprise Structure',hasChild:true,icon:'aspect_ratio',
    children:[
      {name:'Business Process',hasChild:true,children:[
        {name:'Record to Report',hasChild:false},
        {name:'Procure to Pay',hasChild:true,children:[
          {name:'Manage Invoices',hasChild:false},
          {name:'Process Payments',hasChild:false},
          {name:'Reporting',hasChild:false}
        ]},
        {name:'Acquire to Retire',hasChild:false},
        {name:'Order to Cash',hasChild:false},
      ]}
    ]},
  ]

//css

let mainMenuStyle={
  fontSize:'16px',
  fontWeight:'bold',
  fontStyle:'Graphik',
}

let child1Style={
  fontSize:'15px',
  fontWeight:'600',
  fontStyle:'Graphik'
}

let child2Style={
  fontSize:'14px',
  fontWeight:'300',
  fontStyle:'Graphik'
}

let child3Style={
  fontSize:'12px',
  fontStyle:'Graphik'
}

let selectedListItem={
  color: '#0041F0',
  backgroundColor: '#E8EDFA',
  borderLeft: '4px solid #0041f0'
} 

let selectedChildItem={
  fontWeight:'bold',
  backgroundColor: '#E8EDFA',
  borderLeft: '2px solid #0041f0'
} 

let selectedIcon={
  color: '#0041F0',
}

export default function SideNavItems() {


    const [dropdownOpenMain, setDropDownOpen] = React.useState(-1);
    const [dropdownChild1, setDropDownOpen1] = React.useState(-1);
    const [dropdownChild2, setDropDownOpen2] = React.useState(-1);
    const [dropdownChild3, setDropDownOpen3] = React.useState(-1);

    

    const openSubMenu = (screen,index) => {
        if(screen.hasChild)
        {
            if(dropdownOpenMain===index)
            {
                setDropDownOpen(-1);
            }
            else
            {
                setDropDownOpen(index)
            }
        }
    };

    const openSubMenu1 = (screen,index) => {
      if(screen.hasChild)
      {
          if(dropdownChild1===index)
          {
              setDropDownOpen1(-1);
          }
          else
          {
              setDropDownOpen1(index)
          }
      }
  };
  const openSubMenu2 = (screen,index) => {
    if(screen.hasChild)
    {
        if(dropdownChild2===index)
        {
            setDropDownOpen2(-1);
        }
        else
        {
            setDropDownOpen2(index)
        }
    }
};
const openSubMenu3 = (screen,index) => {
  if(screen.hasChild)
  {
      if(dropdownChild3===index)
      {
          setDropDownOpen3(-1);
      }
      else
      {
          setDropDownOpen3(index)
      }
  }
};

    return (
        <>
        {screens.map((screen,indexL1) => (
            <>
            {/* Main Menu */}

            <ListItemButton 
             style={(dropdownOpenMain===indexL1)?selectedListItem:{}}
             onClick={()=>openSubMenu(screen,indexL1)}>
            <Tooltip title={screen.name}>
            <ListItemIcon style={(dropdownOpenMain===indexL1)?selectedIcon:{}}>
              <MaterialIcon icon={screen.icon} ></MaterialIcon>
            </ListItemIcon>
            </Tooltip>
            {/* <MaterialIcon  icon='aspect_ratio'></MaterialIcon> */}
            <ListItemText primaryTypographyProps={{ style: mainMenuStyle }} primary={screen.name} />
            {screen.hasChild?(dropdownOpenMain===indexL1) ? <ExpandLess /> : <ExpandMore />:<></>}
          </ListItemButton>
          {screen.hasChild && <Collapse in={dropdownOpenMain===indexL1} timeout="auto" unmountOnExit>

            {/* Child Layer 1 */}
          <List sx={{ pl: 7 }} component="div" disablePadding>
            {screen.children.map((child1,indexL2) =>(
              <>
              <ListItemButton
                style={(dropdownChild1===indexL2)?selectedChildItem:{}}
                onClick={()=>openSubMenu1(child1,indexL2)}>
                <ListItemText primaryTypographyProps={{ style: child1Style }} primary={child1.name} />
                {child1.hasChild?(dropdownChild1===indexL2) ? <ExpandLess /> : <ExpandMore />:<></>}
              </ListItemButton>

              {child1.hasChild && <Collapse in={dropdownChild1===indexL2} timeout="auto" unmountOnExit>
                
                {/* Child Layer 2 */}
                <List sx={{ pl: 2 }} component="div" disablePadding>
                {child1.children.map((child2,indexL3)=>(
                  <>
                  <ListItemButton 
                  style={(dropdownChild1===indexL2)?selectedChildItem:{}}
                  onClick={()=>openSubMenu2(child2,indexL3)}>
                <ListItemText primaryTypographyProps={{ style: child2Style }} primary={child2.name} />
                {child2.hasChild?(dropdownChild2===indexL3) ? <ExpandLess /> : <ExpandMore />:<></>}
              </ListItemButton>

              {child2.hasChild && <Collapse in={dropdownChild2===indexL3} timeout="auto" unmountOnExit>
                
                {/* Child Layer 3 */}
                <List sx={{ pl: 2 }} component="div" disablePadding>
                {child2.children.map((child3,indexL4)=>(
                  <>
                  <ListItemButton 
                  style={(dropdownChild2===indexL3)?selectedChildItem:{}}
                  onClick={()=>openSubMenu3(child3,indexL4)}>
                <ListItemText primaryTypographyProps={{ style: child3Style }} primary={child3.name} />
                {child3.hasChild?(dropdownChild3===indexL4) ? <ExpandLess /> : <ExpandMore />:<></>}
              </ListItemButton>
                  </>
                ))}
                </List>              
                </Collapse>}
                  </>
                ))}
                </List>
                </Collapse>}
              </>
                ))}
          </List>
        </Collapse>}
            </> 
        ))}  
        </>
    );
}
