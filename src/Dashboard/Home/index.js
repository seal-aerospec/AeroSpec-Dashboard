// import './dashboard.css';
// import './dashboard2.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getMockDeviceDataTest } from '../../graphql/queries'

/* frontend-imports */
import { Button, Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import logo from '../assets/favicon.svg';
import Slider from '../assets/Slider.js';



const initialState = { id: '', time: '', sensor: '', timestamp: ''}

const Dashboard = () => {
  const [formState, setFormState] = useState(initialState)

  async function displayDevice() {
    try {
      const store = await API.graphql({ query: getMockDeviceDataTest, variables: {sensor_id: '18', timestamp: '1606880248914'} });
      const info = store.data.getMockDeviceDataTest;
      console.log(info);
      const newData = {sensor_id: info.sensor_id, timestamp: info.timestamp, Dp: info.Dp_greater_point3, latitude: info.latitude, device_time: info.device_time, longitude: info.longitude};
      console.log(newData);
      setFormState(newData);
    }catch (err) {
      console.log('error: ', err);
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col>
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
      </Row>
    </Container>
  )
}
export default Dashboard;