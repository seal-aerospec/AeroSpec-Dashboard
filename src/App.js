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

const App = () => {
    const [menuCollapse, setMenuCollapse] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const drawerWidth = 280;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

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

    const matches = useMediaQuery(theme.breakpoints.down('md'));

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

    const classes = useStyles();

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
                menuCollapse={menuCollapse}
                handleOpen={handleOpen}
                handleClose={handleClose}
                collapseClick={collapseClick}
                handleChange={handleChange}
                modalOpen={modalOpen}
              />
            </Grid>
            <Grid item container>
              <Router>
                <Grid xs={2} item container>
                  <Sidebar 
                    menuCollapse={menuCollapse}
                    selectedIndex={selectedIndex}
                    handleListItemClick={handleListItemClick}
                    matches={matches}
                  />
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