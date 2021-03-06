import React from 'react';
import examplePic from '../../assets/uploaded_blueprints/example.jpg'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import ParticleGasTemp from '../ParticleGasTemp/ParticleGasTemp'

function DeviceDetails() {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
    paper: {
      height: '50vh',
      width: '100vh',
      margin: '5vh',
      padding: '1vh'
    },
    FloorPlan: {
      objectFit: 'cover'
    }

  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
        container 
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Paper className={classes.paper}>
            <img src={examplePic} className={classes.FloorPlan} alt="floor plan"/>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <ParticleGasTemp />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default DeviceDetails;