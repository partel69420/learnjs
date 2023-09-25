function init() { var canvas = document.getElementById("canvas"); 
if (canvas.getContext) {
     var ctx = canvas.getContext("2d");




     ctx.lineWidth = 5; // Adjust the line width to make lineCap styles more noticeable
     ctx.strokeStyle = "#000000";
     ctx.beginPath();
     ctx.moveTo(200, 50); // a
     ctx.lineTo(200, 150); // b
     ctx.lineTo(360, 150); // c
     ctx.lineTo(290, 230); // d
     ctx.lineTo(320, 330); // e
     ctx.lineTo(200, 260); // f
     ctx.lineTo(140, 330); // g
     ctx.lineTo(150, 225); // g
     ctx.lineTo(60, 150); // h
     ctx.lineTo(160, 150); // i
     ctx.closePath();
     ctx.stroke();

     ctx.fillStyle = "blue";
    ctx.fillRect(400, 80, 500, 100);

    ctx.fillStyle = "black";
    ctx.fillRect(400, 180, 500, 100);

    ctx.fillStyle = "#FBF9F6"; 
    ctx.lineWidth = 1;
    ctx.strokeStyle = "grey";
    ctx.strokeRect(400, 280, 500, 100)

    ctx.beginPath();
ctx.arc(200, 500, 100, 0, 2 * Math.PI);
ctx.lineWidth = '10'
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(200, 500, 100, 4, 1.7 * Math.PI);
ctx.lineTo(200, 500);
ctx.lineWidth = '10';
ctx.fill();



}
}

onload=init;