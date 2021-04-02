import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

/* src/App.js */
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import Home from './Dashboard/Home'
import Blueprints from './Dashboard/BlueprintsAndDevices'
import DeviceDetails from './Dashboard/Home/DeviceDetails';
import Alerts from './Dashboard/Alerts'
import Settings from './Dashboard/Settings'
import Sidebar from './Dashboard/Navigation/Sidebar';

/* Material UI Imports */
// import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import awsExports from "./aws-exports";
import NotificationNetworkCheck from 'material-ui/svg-icons/notification/network-check';
import Topbar from './Dashboard/Navigation/Topbar';
Amplify.configure(awsExports);

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
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //marginLeft: -drawerWidth,
    paddingLeft: '10vh'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  pageMargin: {
    marginLeft: '30vh'
  }
}));

const App = () => {
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [menu, setMenu] = useState(true);
  const [smallScreen, setSmallScreen] = useState(matches);
  const [modalOpen, setModalOpen] = useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const drawerWidth = 280;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const closeMenu = () => {
    setMenu(false);
    // if (!matches) {
    //   setSmallScreen(false);
    // }
  }

  const openMenu = () => {
    setMenu(true);
    // if (!matches) {
    //   setSmallScreen(false);
    // }
  }

  const handleOpen = () => {
      setModalOpen(true);
  };

  const handleClose = () => {
      setModalOpen(false);
  };

  const handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container direction="column">
          <Grid item container>
            <Topbar 
              menu={menu}
              handleOpen={handleOpen}
              handleClose={handleClose}
              handleChange={handleChange}
              openMenu={openMenu}
              closeMenu={closeMenu}
              modalOpen={modalOpen}
            />
          </Grid>
          <Grid item container>
            <Router>
              <Grid xs={2} item container>
                <Sidebar 
                  menu={menu}
                  selectedIndex={selectedIndex}
                  openMenu={openMenu}
                  closeMenu={closeMenu}
                  handleListItemClick={handleListItemClick}
                  matches={matches}
                  smallScreen={smallScreen}
                  setSmallScreen={setSmallScreen}
                />
              </Grid>
              <Grid item xs={menu && !matches ? 10 : 12} justify="center"
                className={clsx(classes.content, {
                  [classes.contentShift]: menu,
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