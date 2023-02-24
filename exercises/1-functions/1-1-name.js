"use strict";

let context;
setup();


drawLine_s(); 
drawLine_a();
drawLine_m();

function setup(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawLine_s(){


    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(175,50);
    context.lineTo(300,50);
    context.moveTo(175,50);
    context.lineTo(175,100);
    context.lineTo(300,100);
    context.lineTo(300,175);
    context.lineTo(175,175);
    
    context.stroke();
}

function drawLine_a(){
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(350,50);
    context.lineTo(450,50);
    context.lineTo(450,175);
    context.moveTo(350,50);
    context.lineTo(350,175);
    context.moveTo(350,100);
    context.lineTo(450,100);

    context.stroke();
}

function drawLine_m(){
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(500,175);
    context.lineTo(500,50);
    context.lineTo(550,80);
    context.lineTo(600,50);
    context.lineTo(600,175);

    context.stroke();



}


