import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

/* ./assets/UI_component */

import navbarLogo from './Dashboard/assets/UI_component/AeroSpec PNG-7.png';
import suggestionIcon from './Dashboard/assets/UI_component/suggestions.png';

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
import Suggestion from './Dashboard/assets/Suggestion.js';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);

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
          backgroundColor: '#e8eef6'
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
      <div>
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
      </div>
    );
}
export default App;