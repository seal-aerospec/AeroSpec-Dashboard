import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

/* ./assets/UI_component */
import navbarLogo from './Dashboard/assets/UI_component/AeroSpec PNG-7.png';
import suggestionIcon from './Dashboard/assets/UI_component/suggestions.png';
import Suggestion from './Dashboard/assets/Suggestion.js';
import NotificationIcon from './Dashboard/assets/UI_component/notifications.png';
import MenuIcon from './Dashboard/assets/UI_component/menu-1.png';

/* src/App.js */
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import Home from './Dashboard/Home'
import Blueprints from './Dashboard/BlueprintsAndDevices'
import Sidebar from './Dashboard/Navigation/Sidebar';

import Alerts from './Dashboard/Alerts'
import Settings from './Dashboard/Settings'

import { Navbar, Nav} from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const drawerWidth = 240;

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

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
      },
      appBar: {
        backgroundColor: '#f0f0f0',
        [theme.breakpoints.up("sm")]: {
          width: "100%"
        },
        zIndex: theme.zIndex.drawer + 1
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        backgroundColor: '#3e6eb0',
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
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
      logo: {
        marginRight: '10px',
        height: '100%',
        width: '100%'
      },
      suggestionbutton: {
        color: '#6389bf',
        backgroundColor: '#e8eef6',
        marginLeft: 'auto'
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
      // <Dashboard />
      // <div className={classes.root}>
      //   <AppBar position="absolute" className={classes.appBar}>
      //     <Toolbar>
      //       <IconButton 
      //         edge="start" 
      //         className={classes.menuButton} 
      //         color="primary" 
      //         aria-label="menu"
      //         onClick={collapseClick}
      //       >
      //         <MenuIcon />
      //       </IconButton>
      //       <Button 
      //           size="medium"
      //           className={classes.suggestionbutton}
      //           onClick={handleOpen}
      //         >
      //           <img src={suggestionIcon} alt="suggestion icon"/>
      //           &nbsp;Suggestions
      //         </Button>
      //         <Modal
      //           open={modalOpen}
      //           onClose={handleClose}
      //           aria-labelledby="simple-modal-title"
      //           aria-describedby="simple-modal-description"
      //         >
      //           {modalBody}
      //         </Modal>
      //     </Toolbar>
      //   </AppBar>
      //   <Router>
      //     <Drawer
      //       className={classes.drawer}
      //       variant="persistent"
      //       anchor="left"
      //       open={menuCollapse}
      //       classes={{
      //         paper: classes.drawerPaper,
      //       }}
      //     >
      //       <Divider />
      //       <List>
      //         <ListItem button key='Home'>
      //           <ListItemText primary='Home' />
      //           <Link to="/home" />
      //         </ListItem>
      //         <ListItem button key='Alerts'>
      //           <ListItemText primary='Alerts' />
      //           <Link to="/alerts" />
      //         </ListItem>
      //         <ListItem button key='BlueprintsDevices'>
      //           <ListItemText primary='Blueprints & Devices' />
      //           <Link to="/blueprints-and-devices" />
      //         </ListItem>
      //         <ListItem button key='Settings'>
      //           <ListItemText primary='Settings' />
      //           <Link to="/settings" />
      //         </ListItem>
      //       </List>
      //     </Drawer>
      //     <Switch>
      //       <Route exact path="/home" component={Home}/>
      //       <Route path="/alerts" component={Alerts}/>
      //       <Route path="/settings" component={Settings}/>
      //       <Route path="/blueprints-and-devices" component={Blueprints}/>
      //     </Switch>
      //   </Router>
      <Router>
        <Navbar bg="light">
          <Navbar.Brand href="/home">
            <img
              src={navbarLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Aerospec Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Button>
                <img src={MenuIcon} alt="Menu Icon"/>
              </Button>
            </Nav>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav>
              <img src={NotificationIcon} alt="Alerts" />
            </Nav>
            <Nav className="ml-auto">
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Router>
            <Col xs={2}>
              <Sidebar menuCollapse={menuCollapse} collapseClick={collapseClick} />
            </Col>
            <Col xs={10}>
              <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/alerts" component={Alerts}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/blueprints-and-devices" component={Blueprints}/>
              </Switch>
            </Col>
          </Router>
        </Row>
      </Router>
    );
}
export default App;