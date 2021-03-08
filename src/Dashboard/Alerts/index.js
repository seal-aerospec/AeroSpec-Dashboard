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
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Alerts() {

  const useStyles = makeStyles((theme) => ({
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
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      backgroundColor: "#FFFFFF",
      padding: '12px 24px',
      margin: theme.spacing(1),
      borderRadius: '10em',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#E4EBF2',
      fontSize: '16px',
      color: '#707070',
      textTransform: 'none',
    }
  }));
  const style = useStyles();

  return (
    <div id="alerts-main">
        <div className={style.search}>
          <SearchIcon />
          <InputBase
            placeholder="Search"
            classes={{
              root: style.inputRoot,
              input: style.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
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