"use strict";

let context;

setup();
drawRectangular_grootste();
drawRectangular_2();
drawRectangular_3();
drawRectangular_4();
drawRectangular_5();


function setup(){

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawRectangular_grootste(){

    context.fillStyle = "#74acd3";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(50,50,350,350);
    context.fill();
    context.stroke();
}

function drawRectangular_2(){

    context.fillStyle = "#74acd3";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();
    context.stroke();
}

function drawRectangular_3(){

    context.fillStyle = "#74acd3";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(100,50,250,250);
    context.fill();
    context.stroke();
}

function drawRectangular_4(){

    context.fillStyle = "#74acd3";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(150,100,200,200);
    context.fill();
    context.stroke();
}
function drawRectangular_5(){

    context.fillStyle = "#74acd3";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(150,150,150,150);
    context.fill();
    context.stroke();
}