import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

// const marks = [
//   {
//     value: 40,
//     label: '1:00pm',
//   },
//   {
//     value: 10,
//     label: '2:00pm',
//   }
// ];

const marks = () => {
  var marks = [];
  for (let i = 0; i <= 24; i++) {
    var label = '';
    if (i == 0) {
      label = <div><div>12</div><div class='apm'>AM</div></div>;
    }
    if (i > 0 && i < 10) {
      label = <div><div>{'0'+i}</div><div class='apm'>AM</div></div>;
    }
    if (i >= 10 && i < 12) {
      label = <div><div>{i}</div><div class='apm'>AM</div></div>;
    }
    if (i >= 12 && i < 22) {
      label = <div><div>{"0"+(i-12)}</div><div class='apm'>PM</div></div>;
    }
    if (i >= 22) {
      label =  <div><div>{(i-12)}</div><div class='apm'>PM</div></div>;
    }
    marks.push({
      value: i,
      label: label
    })
  }
  return marks;
}


export default function TrackFalseSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{margin: "3vh"}}>
      <Typography id="track-false-range-slider" gutterBottom>
        Scroll to view sensor status throughout the day
      </Typography>
      <Slider
        defaultValue={30}
        aria-labelledby="slider-time"
        step={1}
        marks={marks()}
        valueLabelDisplay="off"
        min={0}
        max={24}
      />
    </div>
  );
}