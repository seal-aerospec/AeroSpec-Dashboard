import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 40,
    label: '1:00pm',
  },
  {
    value: 10,
    label: '2:00pm',
  }
];

function valuetext(value) {
  return `${value}°C`;
}

export default function TrackFalseSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="track-false-range-slider" gutterBottom>
        Time
      </Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[20, 37, 50]}
        marks={marks}
      />
    </div>
  );
}