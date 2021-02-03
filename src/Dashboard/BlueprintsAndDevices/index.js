import React, {useRef, useState, useEffect} from 'react'
import example from "../assets/uploaded_blueprints/example.jpg"
import mark from "../assets/UI_component/source 2.png"

const list = [];

const BlueprintsAndDevices = props => {
  const [dotList, setDotList] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = document.getElementById("bp");
    img.onload = function() {
      context.drawImage(img, 0, 0, 800, 700);
    };
    img.src = example;
    var dot = new Image();
    dot.src = mark;
    canvas.addEventListener("click", function(event){
      var x = event.offsetX - 10;
      var y = event.offsetY - 10;
      context.drawImage(dot, x, y, 25, 25);
    });
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

  return (
  <div>
    <canvas id="board" ref={canvasRef} width="800px" height="700px" onClick={drawOne}/>
    <img id="bp" src={example} alt="blueprint" style={{display: "none"}}/>
    <input type="file" title="New Blueprint" id="imageLoader" name="imageLoader" onChange={handleImage}/>
  </div>)
}

export default BlueprintsAndDevices;