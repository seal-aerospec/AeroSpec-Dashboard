import { Link } from "react-router-dom";

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
import navbarLogo2 from '../assets/UI_component/AeroSpec PNG@2x.png';
import BlueprintsDevicesIcon from '../assets/UI_component_svg/BlueprintsDevicesIcon';
import HomeIcon from '../assets/UI_component_svg/HomeIcon';
import SettingsIcon from '../assets/UI_component_svg/SettingsIcon';

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
    [theme.breakpoints.down('sm')]: {
      width: '5%'
    },
  },
  drawerPaper: {
    backgroundColor: '#3E6EB0',
    width: '15%',
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
    maxWidth: '70%',
    maxHeight: 'auto',
  },
  drawerText: {
    color: '#ffffff',
  },
}));

export default function Sidebar({menuCollapse, selectedIndex, handleListItemClick, matches}) {
  const classes = useStyles();

    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={menuCollapse}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img src={matches ? navbarLogo2 : navbarLogo} alt="AeroSpec Logo" className={classes.drawerHeaderImg} />
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