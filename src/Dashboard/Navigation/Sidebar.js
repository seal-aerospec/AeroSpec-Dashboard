import { Link } from 'react-router-dom';

// Material UI
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

/* ./assets/UI_component */
import Alert2Icon from '../assets/UI_component_svg/Alert2Icon';
import navbarLogo from '../assets/UI_component/AeroSpec PNG-7@2x.png';
import BlueprintsDevicesIcon from '../assets/UI_component_svg/BlueprintsDevicesIcon';
import HomeIcon from '../assets/UI_component_svg/HomeIcon';
import SettingsIcon from '../assets/UI_component_svg/SettingsIcon';
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#f8fcff',
  },
  hide: {
    display: 'none',
  },
  dividerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    background: '#557fb9',
    width: '85%',
  },
  drawer: {
    width: '15%',
    flexShrink: 1,
    // [theme.breakpoints.down('md')]: {
    //   width: '25%'
    // },
  },
  drawerPaper: {
    backgroundColor: '#3E6EB0',
    width: '15%',
    // [theme.breakpoints.down('md')]: {
    //   width: '30%'
    // },
  },
  drawerHeader: {
    height: '85px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3.3, 3.3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    backgroundColor: '#FFFFFF',
  },
  drawerHeaderImg: {
    display: 'block',
    maxWidth: '70%',
    maxHeight: 'auto',
    width: 'auto',
    height: 'auto',
  },
  drawerText: {
    color: '#ffffff',
  },
}));

export default function Sidebar({menu, selectedIndex, openMenu, closeMenu, handleListItemClick, matches,
  smallScreen, setSmallScreen}) {
  const classes = useStyles();

  useEffect(() => {
    // in < md screen size, allow for sidebar to be opened
    if (matches && !smallScreen) {
      closeMenu();
      setSmallScreen(true);
    } else if (!matches) {
      setSmallScreen(false);
    }
  }, [matches, smallScreen, setSmallScreen, openMenu, closeMenu]);

  return (
      <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={menu}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <img src={navbarLogo} alt="AeroSpec Logo" className={classes.drawerHeaderImg} />
      </div>
      <Divider />
      <List>
        <ListItem 
          button key='Home' 
          component={Link} 
          to={"/home"}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0) }
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' className={classes.drawerText} />
        </ListItem>
        <List className={classes.dividerContainer}>
          <Divider className={classes.divider} />
        </List>
        <ListItem 
          button key='Alerts' 
          component={Link} 
          to={"/alerts"}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Alert2Icon />
          </ListItemIcon>
          <ListItemText primary='Alerts' className={classes.drawerText} />
        </ListItem>
        <List className={classes.dividerContainer}>
          <Divider className={classes.divider} />
        </List>
        <ListItem 
          button 
          key='BlueprintsDevices' 
          component={Link} 
          to={"/blueprints-and-devices"}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <BlueprintsDevicesIcon />
          </ListItemIcon>
          <ListItemText primary='Blueprints & Devices' className={classes.drawerText} />
        </ListItem>
        <List className={classes.dividerContainer}>
          <Divider className={classes.divider} />
        </List>
        <ListItem 
          opacity={3}
          button 
          key='Settings' 
          component={Link} 
          to={"/settings"}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary='Settings' className={classes.drawerText} />
        </ListItem>
      </List>
      <List className={classes.dividerContainer}>
        <Divider className={classes.divider} />
      </List>
    </Drawer>
  );
}