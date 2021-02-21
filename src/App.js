import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom"

/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'
import Home from './Dashboard/Home'
import Blueprints from './Dashboard/BlueprintsAndDevices'

import Alerts from './Dashboard/Alerts'
import Settings from './Dashboard/Settings'

import { Navbar, Nav} from 'react-bootstrap';

import { Container, Row, Col} from 'react-bootstrap';
import Suggestion from './Dashboard/assets/Suggestion.js'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

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
    <Router>
        <Container fluid>
            <Navbar bg="light">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div >
                <button type="button" onClick={handleOpen}>
                    Suggestions
                </button>
                <Modal
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {modalBody}
                </Modal>
                </div>
                </Navbar.Collapse>
            </Navbar>
            <Row>
                <Col xs={2}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/alerts">Alerts</Link></Nav.Link>
                        <Nav.Link><Link to="/blueprints-and-devices">Blueprints and Device</Link></Nav.Link>
                        <Nav.Link><Link to="/settings">Settings</Link></Nav.Link>
                    </Nav>
                </Col>
                <Col xs={10}>
                    <Route path="/home" component={Home}/>
                    <Route path="/alerts" component={Alerts}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/blueprints-and-devices" component={Blueprints}/>
                </Col>
            </Row>
        </Container>
    </Router>
    );
}
export default App;