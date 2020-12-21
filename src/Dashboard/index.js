// import './dashboard.css';
// import './dashboard2.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getMockDeviceDataTest } from '../graphql/queries'

/* frontend-imports */
import { Button, Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import logo from './assets/favicon.svg';
import Slider from './assets/Slider.js';
import Suggestion from './assets/Suggestion.js'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


const initialState = { id: '', time: '', sensor: '', timestamp: ''}

const Dashboard = () => {
  const [formState, setFormState] = useState(initialState)
  const [modalOpen, setModalOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  async function displayDevice() {
    try {
      const store = await API.graphql({ query: getMockDeviceDataTest, variables: {sensor_id: '18', timestamp: '1606880248914'} });
      const info = store.data.getMockDeviceDataTest;
      console.log(info);
      const newData = {sensor_id: info.sensor_id, timestamp: info.timestamp, latitude: info.latitude, device_time: info.device_time, longitude: info.longitude};
      setFormState(newData);
    }catch (err) {
      console.log('error: ', err);
    }
  }

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
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Alert</Nav.Link>
            <Nav.Link eventKey="link-2">Blueprints and Device</Nav.Link>
            <Nav.Link eventKey="link-3">Settings</Nav.Link>
          </Nav>
        </Col>
        <Col xs={6}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Nano">
            <p>Nano</p>
            <Slider></Slider>
          </Tab>
          <Tab eventKey="profile" title="Gas">
            <p>Gas</p>
          </Tab>
          <Tab eventKey="contact" title="Temperature" >
            <p>Temprature</p>
          </Tab>
        </Tabs>
        </Col>
        <Col xs={4}>
          <Row>
            <Col>
            <p>My Devices</p>
            </Col>
            <Col>
            <Button onClick={displayDevice}>Add</Button>
            </Col>
          </Row>
          <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>sensor id: {formState.sensor_id}</Card.Title>
              <Card.Text>
                <div>timestamp: {formState.timestamp}</div>
                <div>latitude: {formState.latitude}</div>
                <div>device time: {formState.device_time}</div>
                <div>longitude: {formState.longitude}</div>
              </Card.Text>
              <Button variant="primary">Delete</Button>
            </Card.Body>
          </Card>
          </Row>

        </Col>
      </Row>
    </Container>
  )
}
export default Dashboard;