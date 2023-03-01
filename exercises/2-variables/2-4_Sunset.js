"use strict";

let context

set_up();
drawRectangular_1();
drawRectangular_2();
drawRectangular_3();
drawRectangular_4();
drawSun();


function set_up() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawRectangular_1(){
    context.fillStyle = "#ea9e24";
    context.beginPath();
    context.rect(0,0,innerWidth,innerHeight/4);
    context.fill();
}

function drawRectangular_2(){

    context.fillStyle = "#fc701b";
    context.beginPath();
    context.rect(0,innerHeight/4,innerWidth,innerHeight/4);
    context.fill();
}

function drawRectangular_3(){

    context.fillStyle = "#ae2705";
    context.beginPath();
    context.rect(0,2*(innerHeight/4),innerWidth,innerHeight/4);
    context.fill();
}

function drawRectangular_4(){

    context.fillStyle = "darkblue";
    context.beginPath();
    context.rect(0,3*(innerHeight/4),innerWidth,innerHeight/4);
    context.fill();

}

function drawSun(){

    context.fillStyle = "#ffffc8";
    context.beginPath();
    context.arc(innerWidth/2,3*(innerHeight/4),innerWidth/4,0,Math.PI,true);
    context.fill();
}