import './dashboard.css';
import './dashboard2.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getAeroSpec } from '../graphql/queries'
import { listAeroSpecs } from '../graphql/queries'

/* frontend-imports */
import { Button, Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import logo from './assets/favicon.svg';
import Slider from './assets/Slider.js';



const initialState = { id: '', deviceName: '' }

const Dashboard = () => {
  const [formState, setFormState] = useState(initialState)

  async function displayDevice() {
    try {
      const store = await API.graphql({ query: getAeroSpec, variables: {id: '123lol'} });
      const info = store.data.getAeroSpec;
      const newS = {id: info.id, deviceName: info.deviceName};
      setFormState(newS);
      console.log(formState);
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
              <Card.Title>{formState.id}</Card.Title>
              <Card.Text>
                {formState.deviceName}
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