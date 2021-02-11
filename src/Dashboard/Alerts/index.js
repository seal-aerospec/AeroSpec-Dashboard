import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./alert.css";
import bellIcon from "../assets/UI_component/alert 1.png";
import exampleAlert from "../assets/uploaded_blueprints/alerts-floor-plan-icon.jpg";

// components imports
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

export default function Alerts() {

  const useStyles = makeStyles({
    alertCards: {
      marginTop: '3vh'
    },
    searchBar: {
      width: '100%'
    },
    cardContent: {
      height: '30vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden'
    },
    bellIcon: {
      height: '30%',
      width: 'auto',
      margin: '3vh'
    },
    exampleMinView: {
      flexShrink: 0,
      height: '100%',
      width: 'auto',
      marginLeft: 'auto'
    }

  });
  const style = useStyles();

  return (
    <div id="alerts-main">
      <form autoComplete="on" id="search-bar">
      <TextField id="filled-basic" label="Search" variant="filled" className={style.searchBar}/>
      </form>
      <Card className={style.alertCards}>
        <CardContent className={style.cardContent}>
          <img src={bellIcon} className={style.bellIcon}></img>
          <div>
            <div>(MMMM DD, YYYY)</div>
            <div>Machine Learning Suggestion</div>
            <div>Sensor message</div>
          </div>
          <img src={exampleAlert} className={style.exampleMinView}></img>
        </CardContent>
      </Card>
      <Card className={style.alertCards}>
        <CardContent className={style.cardContent}>
          <img src={bellIcon} className={style.bellIcon}></img>
          <div>
            <div>(MMMM DD, YYYY)</div>
            <div>Machine Learning Suggestion</div>
            <div>Sensor message</div>
          </div>
          <img src={exampleAlert} className={style.exampleMinView}></img>
        </CardContent>
      </Card>
      <Card className={style.alertCards}>
        <CardContent className={style.cardContent}>
          <img src={bellIcon} className={style.bellIcon}></img>
          <div>
            <div>(MMMM DD, YYYY)</div>
            <div>Machine Learning Suggestion</div>
            <div>Sensor message</div>
          </div>
          <img src={exampleAlert} className={style.exampleMinView}></img>
        </CardContent>
      </Card>
    </div>
  );
}