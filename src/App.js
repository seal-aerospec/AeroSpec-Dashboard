import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

/* ./assets/UI_component */
import navbarLogo from './Dashboard/assets/UI_component/AeroSpec PNG-7.png';
import Alert2Icon from './Dashboard/assets/UI_component_svg/Alert2Icon';
import BlueprintsDevicesIcon from './Dashboard/assets/UI_component_svg/BlueprintsDevicesIcon';
import HomeIcon from './Dashboard/assets/UI_component_svg/HomeIcon';
import MenuIcon from './Dashboard/assets/UI_component_svg/MenuIcon';
import NotificationIcon from './Dashboard/assets/UI_component_svg/NotificationIcon';
import SettingsIcon from './Dashboard/assets/UI_component_svg/SettingsIcon';
import suggestionIcon from './Dashboard/assets/UI_component/suggestions.png';
import Suggestion from './Dashboard/assets/Suggestion.js';

/* src/App.js */
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import Home from './Dashboard/Home'
import Blueprints from './Dashboard/BlueprintsAndDevices'
import DeviceDetails from './Dashboard/Home/DeviceDetails';
import Alerts from './Dashboard/Alerts'
import Settings from './Dashboard/Settings'

import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Modal from '@material-ui/core/Modal';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
    const [menuCollapse, setMenuCollapse] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const drawerWidth = 280;

    const collapseClick = () => {
      //condition checking to change state from true to false and vice versa
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const theme = createMuiTheme({
      typography: {
        fontFamily: [
          'Montserrat',
          'sans-serif',
        ].join(','),
      },
    });

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        backgroundColor: '#f8fcff',
      },
      appBar: {
        backgroundColor: '#FFFFFF',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        position: 'relative',
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
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
        width: drawerWidth-10,
        flexShrink: 1,
      },
      drawerPaper: {
        backgroundColor: '#3E6EB0',
        width: drawerWidth-10,
      },
      drawerHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3, 3),
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
      content: {
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      suggestionbutton: {
        color: '#6389bf',
        backgroundColor: '#e8eef6',
        marginLeft: 'auto',
        outline: 'none'
      },
    }));

    const classes = useStyles();

    const modalBody = (
      <div style={modalStyle} className={classes.paper}>
        <Suggestion />
      </div>
    );

    function rand() {
      return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
      const top = 50 + rand();
      const left = 50 + rand();

      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid container xs={12} direction="column">
            <Grid item container>
              <AppBar
                elevation={3} 
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: menuCollapse,
                })}
              >
              <Toolbar>
                <Grid item container>
                  <Grid item>
                    <IconButton 
                      edge="start" 
                      color="relative" 
                      aria-label="menu"
                      onClick={collapseClick}
                    >
                      <MenuIcon />
                    </IconButton>
                    <IconButton
                      edge="start"
                      href="/alerts"
                    >
                      <NotificationIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Button 
                    size="medium"
                    className={classes.suggestionbutton}
                    onClick={handleOpen}
                  >
                    <img src={suggestionIcon} alt="suggestion icon"/>
                    &nbsp;Suggestions
                  </Button>
                  <Modal
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {modalBody}
                  </Modal>
              </Toolbar>
            </AppBar>
            </Grid>
            <Grid item container>
              <Router>
                <Grid xs={2} item container>
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
                      <img src={navbarLogo} alt="AeroSpec Logo" className={classes.drawerHeaderImg} />
                    </div>
                    <List>
                      <ListItem button key='Home' component={Link} to={"/home"}>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' className={classes.drawerText} />
                      </ListItem>
                      <List className={classes.dividerContainer}>
                        <Divider className={classes.divider} />
                      </List>
                      <ListItem button key='Alerts' component={Link} to={"/alerts"}>
                        <ListItemIcon>
                          <Alert2Icon />
                        </ListItemIcon>
                        <ListItemText primary='Alerts' className={classes.drawerText} />
                      </ListItem>
                      <List className={classes.dividerContainer}>
                        <Divider className={classes.divider} />
                      </List>
                      <ListItem button key='BlueprintsDevices' component={Link} to={"/blueprints-and-devices"}>
                        <ListItemIcon>
                          <BlueprintsDevicesIcon />
                        </ListItemIcon>
                        <ListItemText primary='Blueprints & Devices' className={classes.drawerText} />
                      </ListItem>
                      <List className={classes.dividerContainer}>
                        <Divider className={classes.divider} />
                      </List>
                      <ListItem button key='Settings' component={Link} to={"/settings"}>
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
                </Grid>
                <Grid item xs={10} justify="center" 
                  className={clsx(classes.content, {
                    [classes.contentShift]: menuCollapse,
                  })}
                >
                  <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/alerts" component={Alerts}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/blueprints-and-devices" component={Blueprints}/>
                    <Route path="/device-details" component={DeviceDetails}/>
                  </Switch>
                </Grid>
              </Router>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
}
export default App;