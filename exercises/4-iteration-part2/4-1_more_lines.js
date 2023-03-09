"use strict"
import context from "../../scripts/context.js";

drawRectangularOrange();
drawVerticaal();
drawHorizontaal();



function drawRectangularOrange(){
    context.fillStyle = "orange";
    context.beginPath();
    context.rect(0,0,600,300)
    context.fill();
}

function drawHorizontaal(){
    context.strokeStyle = "white";
    context.beginPath();
    for(let i = 0; i <= 30; i++){
        context.moveTo(0,i*10);
        context.lineTo(600,300-i*10);
        context.stroke();
    }
}

function drawVerticaal(){
    context.strokeStyle = "white";
    context.beginPath();
    for(let i = 0; i <= 60;i++){
        context.moveTo(i*10,0);
        context.lineTo(600-i*10,300);
        context.stroke();
    }
}