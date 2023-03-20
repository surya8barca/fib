import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

let screens=[
    {name:'Screen 1',hasChild:false},
    {name:'Screen 2',hasChild:true,children:['Child 1','Child 2']}
  ]

export default function SideNavItems() {

    const [open, setOpen] = React.useState(-1);

  const handleClick = (index) => {
    if(open===index)
    {
        setOpen(-1);
    }
    else
    {
        setOpen(index)
    }
    };

    return (
        <>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
        {screens.map((screen,index) => (
            <>
            <ListItemButton onClick={()=>handleClick(index)}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={screen.name} />
            {open===index ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {screen.hasChild && <Collapse in={open===index} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {screen.children.map((name,index) =>(
                <ListItemButton  sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
                ))}
          </List>
        </Collapse>}
            </> 
        ))}
    </List>  
        </>
    );
}
