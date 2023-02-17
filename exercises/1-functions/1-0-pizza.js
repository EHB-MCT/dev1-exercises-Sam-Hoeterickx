"use strict";


  drawLine();

function drawLine(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //This code draws a rectangle with a red fill and an outline
    context.fillStyle = "red";
    context.lineWidth = 1,5; 
    context.beginPath();
    context.rect(50,50,100,100);
    context.fill();
    context.stroke();  

    //This code draws a circle with a yellow fill 
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(200,200,50,0,Math.PI, true);
    context.fill();

    //This code draws a ellipse with a green fill
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(300,300,100,50,Math.PI/4,0,Math.PI*2);
    context.fill()
 
}

window.onresize = drawOrange;

drawOrange();
function drawOrange(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "orange";
    context.arc(100,100,50,0,Math.PI*2);
    context.fill();

}
