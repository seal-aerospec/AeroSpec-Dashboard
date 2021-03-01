import React, {useRef, useState, useEffect} from 'react'
import example from "../assets/uploaded_blueprints/example.jpg"
import mark from "../assets/UI_component/source 2.png"
import './blueprints.css'


import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getFrontendteamschema } from '../../graphql/queries'

/* frontend-imports */
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

/* Asset Imports */
import DeleteIcon from '../assets/UI_component/bin.png';
import Typography from 'material-ui/styles/typography';

const list = [];

const initialState = { id: '', time: '', sensor: '', timestamp: ''}
const BlueprintsAndDevices = props => {
  const [dotList, setDotList] = useState([]);
  const [deviceState, setDeviceState] = useState(initialState)

  const canvasRef = useRef(null);

  async function displayDevice() {
    try {
      const store = await API.graphql({ query: getFrontendteamschema, variables: {id:'0'} });
      const info = store.data.getFrontendteamschema;
      console.log(info);
      const newData = {SerialNumber: info.Serial_Number, Battery: info.Battery, WifiStrength: info.Wifi_Strength};
      console.log(newData);
      setDeviceState(newData);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = document.getElementById("bp");
    img.onload = function() {
      context.drawImage(img, 0, 0, "100%", "100%");
    };
    img.src = example;
    var dot = new Image();
    dot.src = mark;
    canvas.addEventListener("click", function(event){
      var x = event.offsetX - 10;
      var y = event.offsetY - 10;
      context.drawImage(dot, x, y, 25, 25);
    });

    displayDevice();
  }, []);

  function drawOne(event){
    var dot = new Image();
    dot.src = mark;
    var x = event.nativeEvent.offsetX - 10;
    var y = event.nativeEvent.offsetY - 10;
    let each = {"x": x, "y": y};
    list.push(each);
    alert("A new device is placed");
    console.log(dotList);
    setDotList(list);
  }


  function handleImage(e){
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    alert("New blueprint uploaded");
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img,0,0, 800, 700);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const useStyles = makeStyles((theme) => ({
    activeButton: {
      height: 20,
      position: 'relative',
      bottom: -7,
      backgroundColor: '#3e6eb0',
      color: '#ffffff',
      borderRadius: 20
    },
    deleteButton: {
      top: 0,
      right: 0,
      position: 'absolute'
    },
    deleteIcon: {
      width: 15
    },
  }));

  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row" style={{width: '100%'}}>
      <Box style={{margin: "5vh"}}>
        <Paper style={{padding: "5vh"}}>
          <Box display="flex" id="bp-edit-panel">
            {"Pick and place the sensor on its location"}
            <Button variant="contained" color="primary">
              Edit Blueprint
            </Button>
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </Box>
          <canvas id="board" ref={canvasRef} onClick={drawOne} width="800px" height="700px"/>
          <img id="bp" src={example} alt="blueprint" style={{display: "none"}}/>
          <input type="file" title="New Blueprint" id="imageLoader" name="imageLoader" onChange={handleImage}/>
        </Paper>
      </Box>
      <Box>
        <Paper variant="outlined" square style={{height:"100%", padding: 5}}>
          <Box display="flex" flexDirection="row" justifyContent="space-between">
            <h5>My Devices</h5>
            <Button>Add +</Button>
          </Box>
          <Box>
              <Card style={{ width: '18rem', padding: '10px', margin: '10px'}}>
                  <p>DEVICE NAME</p>
                  <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <h5>AeroSpec 9</h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   
                    <Button>
                      <img src={DeleteIcon} alt="Delete Button" className={classes.deleteIcon} />
                    </Button>
                    <Button color="primary" className={classes.activeButton}>
                      Active
                    </Button>
                  </Box>
                  <div>Serial Number: {deviceState.SerialNumber}</div>
                  <div>Battery: {deviceState.Battery}</div>
                  <div>Wifi Strength: {deviceState.WifiStrength}</div>
              </Card>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default BlueprintsAndDevices;
