import './dashboard.css';
import './dashboard2.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getDeviceDataTest } from '../graphql/queries'

/* frontend-imports */
import { Button, Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import logo from './assets/favicon.svg';
import Slider from './assets/Slider.js';



const initialState = { id: '', time: '', sensor: '', timestamp: ''}

const Dashboard = () => {
  const [formState, setFormState] = useState(initialState)

  async function displayDevice() {
    try {
      const store = await API.graphql({ query: getDeviceDataTest, variables: {id: '02f9bde0-197d-11eb-8848-d19ed1c9f7eb'} });
      const info = store.data.getDeviceDataTest;
      const payload = JSON.parse(info.payload);
      const newData = {id: info.id, time: payload['time'], sensor: 'a'+payload['sensor_a0'], timestamp: info.timestamp};
      setFormState(newData);
      console.log(newData);
      console.log(payload);
    }catch (err) {
      console.log('error: ', err);
    }
  }

  return (
    <Container fluid>
      <Navbar bg="light">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl type="text" placeholder="Suggestions" className="mr-sm-2" />
        </Form>
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
              <Card.Title>id: {formState.id}</Card.Title>
              <Card.Text>
                <div>time: {formState.time}</div>
                <div>sensor: {formState.sensor}</div>
                <div>timestamp: {formState.timestamp}</div>
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