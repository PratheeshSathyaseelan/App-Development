import React from 'react'
import './Menu.css'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { Link } from 'react-router-dom';


function Menu() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box className='Background-color'
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        <div className='ubg'>
          <List >
          <ListItem key="DashBoard" disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon style={{color:'whitesmoke'}} />
      </ListItemIcon>
      <Link to="/dash" style={{textDecoration:'none',color:'whitesmoke'}}> {/* Link to Dashboard page */}
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItemButton>
  </ListItem>
  <ListItem key="New Audio" disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <MailIcon style={{color:'whitesmoke'}} />
      </ListItemIcon>
      <Link to="/new-audio" style={{textDecoration:'none',color:'whitesmoke'}}> {/* Link to New Audio page */}
        <ListItemText primary="New Audio" />
      </Link>
    </ListItemButton>
  </ListItem>
  <ListItem key="Send Request" disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon style={{color:'whitesmoke'}} />
      </ListItemIcon>
      <Link to="/send-request" style={{textDecoration:'none',color:'whitesmoke'}}> {/* Link to Send Request page */}
        <ListItemText primary="Send Request" />
      </Link>
    </ListItemButton>
  </ListItem>
  <ListItem key="Favourites" disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <MailIcon style={{color:'whitesmoke'}}/>
      </ListItemIcon>
      <Link to="/favourites" style={{textDecoration:'none',color:'whitesmoke'}}> {/* Link to Favourites page */}
        <ListItemText primary="Favourites" />
      </Link>
    </ListItemButton>
  </ListItem>
          </List>
          </div>
          <Divider />
          <div className='bc'>
          <List>
          <ListItem key="DashBoard" disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon style={{color:'whitesmoke'}} />
      </ListItemIcon>
      <Link to="/AboutUs" style={{textDecoration:'none',color:'whitesmoke'}}> {/* Link to Dashboard page */}
        <ListItemText primary="About Us" />
      </Link>
    </ListItemButton>
  </ListItem>
  <ListItem key="New Audio" disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <MailIcon style={{color:'whitesmoke'}} />
      </ListItemIcon>
      <Link to="/NewStories" style={{textDecoration:'none',color:'whitesmoke'}} > {/* Link to New Audio page */}
        <ListItemText primary="New Audio" />
      </Link>
    </ListItemButton>
  </ListItem>
  <ListItem key="Send Request" disablePadding >
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon style={{color:'whitesmoke'}} />
      </ListItemIcon>
      <Link to="/send-request" style={{textDecoration:'none',color:'whitesmoke'}}> {/* Link to Send Request page */}
        <ListItemText primary="Send Request" />
      </Link>
    </ListItemButton>
  </ListItem>
  <ListItem key="Favourites" disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <MailIcon style={{color:'whitesmoke'}} className='mailmenu' />
      </ListItemIcon>
      <Link to="/favourites" style={{textDecoration:'none',color:'whitesmoke'}}> {/* Link to Favourites page */}
        <ListItemText primary="Favourites" />
      </Link>
    </ListItemButton>
  </ListItem>
          </List>
          </div>
        </Box>
      );

  return (
    <div>
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <WidgetsRoundedIcon className='wid'/>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    </div>
  )
}

export default Menu