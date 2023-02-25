"use strict";

let context

setup();
drawRectangular_orange();
drawArc_yellow();
drawRectangular_blue();


function setup(){

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawRectangular_blue(){

    context.fillStyle = "blue";
    context.strokeStyle = "blue";
    context.beginPath();
    context.rect(50,250,350,150);
    context.fill();
    context.stroke();
}

function drawRectangular_orange(){

    context.fillStyle = "orange";
    context.strokeStyle = "orange";
    context.beginPath();
    context.rect(50,50,350,350);
    context.fill();
    context.stroke();
}

function drawArc_yellow(){

    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(225,240,100,0,2*Math.PI,false);
    context.fill();

}
