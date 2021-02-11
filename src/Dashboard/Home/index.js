// import './dashboard.css';
// import './dashboard2.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getMockDeviceDataTest } from '../../graphql/queries'
import examplePic from '../assets/uploaded_blueprints/example.jpg'
import './home.css'

/* frontend-imports */

import logo from '../assets/favicon.svg';
import Slider from '../assets/Slider.js';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const initialState = { id: '', time: '', sensor: '', timestamp: ''}

const Dashboard = () => {
  const [formState, setFormState] = useState(initialState)

  return (
    <div id="home-main">
      <AppBar position="static">
      <Tabs id="type-sensor-tab" style={{display: 'flex', justifyContent: 'center'}}>
        <Tab label="Nano Particle"/>
        <Tab label="Gas"/>
        <Tab label="Temperature" />
      </Tabs>
      </AppBar>
      <Slider>
      </Slider>
      <img src={examplePic}></img>
    </div>

  )
}
export default Dashboard;