import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

/* ./assets/UI_component */
import navbarLogo from './Dashboard/assets/UI_component/AeroSpec PNG-7@2x.png';
import navbarLogo2 from './Dashboard/assets/UI_component/AeroSpec PNG@2x.png';
import ActiveTabIcon from './Dashboard/assets/UI_component_svg/ActiveTabIcon';
import Alert2Icon from './Dashboard/assets/UI_component_svg/Alert2Icon';
import BlueprintsDevicesIcon from './Dashboard/assets/UI_component_svg/BlueprintsDevicesIcon';
import HomeIcon from './Dashboard/assets/UI_component_svg/HomeIcon';
import MenuIcon from './Dashboard/assets/UI_component_svg/MenuIcon';
import NotificationIcon from './Dashboard/assets/UI_component_svg/NotificationIcon';
import SettingsIcon from './Dashboard/assets/UI_component_svg/SettingsIcon';
import suggestionIcon from './Dashboard/assets/UI_component/suggestions.png';
import Suggestion from './Dashboard/assets/Suggestion.js';
import screenshotIcon from './Dashboard/assets/UI_component/screenshot.png'

/* src/App.js */
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import Home from './Dashboard/Home'
import Blueprints from './Dashboard/BlueprintsAndDevices'
import DeviceDetails from './Dashboard/Home/DeviceDetails';
import Alerts from './Dashboard/Alerts'
import Settings from './Dashboard/Settings'
import Sidebar from './Dashboard/Navigation/Sidebar';

import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import awsExports from "./aws-exports";
import NotificationNetworkCheck from 'material-ui/svg-icons/notification/network-check';
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
      appBar: {
        backgroundColor: '#FFFFFF',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        position: 'relative',
      },
      appBarShift: {
        width: '84%',
        marginLeft: '16%',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      hide: {
        display: 'none',
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
      suggestionbutton: {
        color: '#6389bf',
        backgroundColor: '#e8eef6',
        marginLeft: 'auto',
        outline: 'none'
      },
      suggestionBackDrop: {
        background: 'rgba(0,0,0,0.2)'
      },
      suggestion: {
        borderRadius: '2vh',
        height: '70vh',
        width: '70vh',
        textAlign: 'center'
      },
      uploadField: {
        borderRadius: '2vh',
        height: '40%',
        width: '50%',
        backgroundColor: 'white',
        borderStyle: 'dashed',
        borderWidth: '2px',
        borderColor: '#c7cdd4',
        marginBottom: '3vh',
        boxShadow: 'none'
      },
      suggestionText: {
        height: '50%',
      },
      cancelButton: {
        height: '7vh',
        backgroundColor: "#FFFFFF",
        padding: '12px 24px',
        margin: theme.spacing(1),
        borderRadius: '5em',
        fontSize: '16px',
        color: '#486EAB',
        textTransform: 'none',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#486EAB',
      },
      saveButton: {
        height: '7vh',
        backgroundColor: "#486EAB",
        padding: '12px 24px',
        margin: theme.spacing(1),
        borderRadius: '5em',
        fontSize: '16px',
        color: '#FFFFFF',
        textTransform: 'none',
        borderStyle: 'solid',
        borderWidth: '1px',
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
              <AppBar
                elevation={1} 
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
                  <Dialog PaperProps={{
                    classes: {
                      root: classes.suggestion
                    }
                  }} BackdropProps={{
                    classes: {
                      root: classes.suggestionBackDrop
                    }
                  }} open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Submit Suggestion</DialogTitle>
                    <DialogContent>
                    <Button variant="contained"
                    component="label" className={classes.uploadField}>
                      Upload Screenshot
                    <input type="file" onChange={handleChange} hidden/>
                    </Button>
                    <TextField className={classes.suggestionText} label="Write Suggestion here.."
                    rows="5" type="search" variant="outlined" fullWidth multiline/>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} className={classes.cancelButton}>
                        Cancel
                      </Button>
                      <Button onClick={handleClose} className={classes.saveButton}>
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
              </Toolbar>
            </AppBar>
            </Grid>
            <Grid item container>
              <Router>
                <Grid xs={2} item container>
                  <Sidebar 
                    menuCollapse = {menuCollapse}
                    selectedIndex = {selectedIndex}
                    handleListItemClick = {handleListItemClick}
                    matches = {matches}
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