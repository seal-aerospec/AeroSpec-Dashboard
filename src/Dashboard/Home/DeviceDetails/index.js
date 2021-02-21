import React from 'react';
import examplePic from '../../assets/uploaded_blueprints/example.jpg'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

function DeviceDetails() {
  console.log("here");
  const useStyles = makeStyles({
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
  const style = useStyles();

  return (
    <div>
    <Paper className={style.paper}>
      <img src={examplePic} className={style.FloorPlan}/>
    </Paper>
    <Paper className={style.paper}>
    </Paper>
    </div>
  );
};
export default DeviceDetails;