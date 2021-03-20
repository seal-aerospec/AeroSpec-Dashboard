import React from 'react';
import examplePic from '../../assets/uploaded_blueprints/example.jpg'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import ParticleGasTemp from '../ParticleGasTemp/ParticleGasTemp.js'

export default function DeviceDetails() {
  console.log("here");
  const useStyles = makeStyles({
    paper: {
      height: '50vh',
      width: '100vh',
      margin: '5vh',
      padding: '1vh'
      },
    chartPaper: {
      height: '100%',
      width: '100vh',
      margin: '5vh',
      padding: '1vh'
    },
    FloorPlan: {
      objectFit: 'cover'
    }

  });
  const style = useStyles();

  return (
    <div>
    <Paper className={style.paper}>
      <img src={examplePic} className={style.FloorPlan}/>
    </Paper>
    <Paper className={style.chartPaper}>
      <ParticleGasTemp />
    </Paper>
    </div>
  );
};