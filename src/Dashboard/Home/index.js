// import './dashboard.css';
// import './dashboard2.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getMockDeviceDataTest } from '../../graphql/queries'
import examplePic from '../assets/uploaded_blueprints/example.jpg'
import './home.css'
import DeviceDetails from './DeviceDetails'


/* frontend-imports */
import logo from '../assets/favicon.svg';
import Slider from '../assets/Slider.js';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch} from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';

const initialState = { id: '', time: '', sensor: '', timestamp: ''}

const Dashboard = () => {
  const [formState, setFormState] = useState(initialState)
  let { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    blueprint: {
      backgroundColor: '#ffffff',
    },
    graphBtn: {
      backgroundColor: "#FFFFFF",
      margin: theme.spacing(1),
      borderRadius: '10em',
    },
  }));

  const classes = useStyles();

  return (
    <div id="home-main" className={classes.root}>
      <Route exact path={path}>
        <Grid xs={12} container>
          <Link to={`/device-details`} className={classes.img} >
            Link to device Detail
          </Link>
          <Grid item container>
            <Grid item>
              <Button className={classes.graphBtn}>
                Nano Particle
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.graphBtn}>
                Gas
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.graphBtn}>
                Temperature
              </Button>
            </Grid>
          </Grid>
          {/* <Tabs id="type-sensor-tab" style={{display: 'flex', justifyContent: 'center'}}>
            <Tab label="Nano Particle"/>
            <Tab label="Gas"/>
            <Tab label="Temperature" />
          </Tabs> */}
          <Grid 
              alignItems="center"
              justify="center"
              container 
              item
              className={classes.blueprint}
            >
            <Slider />
            <Grid item>
              <img src={examplePic} alt="blueprint" />
            </Grid>
          </Grid>
        </Grid>
      </Route>
      <Route path={`/device-details`} component={DeviceDetails}></Route>
    </div>

  )
}
export default Dashboard;