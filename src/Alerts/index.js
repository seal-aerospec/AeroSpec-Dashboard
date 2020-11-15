import './alerts.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getDeviceDataTest } from '../graphql/queries'

/* frontend-imports */
import { Button, Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';


const Alerts = () => {

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
          <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>id:</Card.Title>
              <Card.Text>
                <div>time:</div>
                <div>sensor:</div>
                <div>timestamp:</div>
              </Card.Text>
              <Button variant="primary">Delete</Button>
            </Card.Body>
          </Card>
          </Row>
      </Row>
    </Container>
  )
}
export default Alerts;