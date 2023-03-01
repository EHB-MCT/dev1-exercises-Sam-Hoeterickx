"use strict";

let context;

set_up();

drawRectangular_darkblue();
drawRectangular_darkblue_2();
drawRectangular_lightblue();
drawRectangular_lightblue_2();
drawRectangular_gray();
drawRectangular_red();


function set_up() {
    let canvas = document.querySelector("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    context = canvas.getContext("2d");
}

function drawRectangular_darkblue(){
 
    context.fillStyle = "darkblue";
    context.beginPath();
    context.rect(75,50,125,250);
    context.fill();
}

function drawRectangular_darkblue_2(){

    context.fillStyle = "darkblue";
    context.beginPath();
    context.rect(350,50,125,250);
    context.fill();

}

function drawRectangular_lightblue(){

    context.fillStyle = "#007dff";
    context.beginPath();
    context.rect(75,300,125,100);
    context.fill();
}

function drawRectangular_lightblue_2(){

    context.fillStyle = "#007dff";
    context.beginPath();
    context.rect(350,300,125,100);
    context.fill();
}

function drawRectangular_red(){

    context.fillStyle = "red";
    context.beginPath();
    context.rect(75,125,400,100);
    context.fill();
}

function drawRectangular_gray(){

    context.fillStyle ="lightgray";
    context.beginPath();
    context.rect(200,50,150,350);
    context.fill();
}