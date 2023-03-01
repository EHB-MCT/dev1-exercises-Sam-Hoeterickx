"use strict";
let context;

set_up();
getRandomColor();
drawRectangular_2_1();
drawRectangular_2_2();
drawRectangular_2_3();
drawRectangular_2_4();
drawRectangular_2_5();
drawRectangular_2_6();
drawRectangular_2_7();
drawRectangular_2_8();


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function set_up() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawRectangular_2_1(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();
}

function drawRectangular_2_2(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(60,60,280,280);
    context.fill();
    context.stroke();
}

function drawRectangular_2_3(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(70,70,260,260);
    context.fill();
    context.stroke();
}

function drawRectangular_2_4(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(80,80,240,240);
    context.fill();
    context.stroke();
}

function drawRectangular_2_5(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(90,90,220,220);
    context.fill();
    context.stroke();
}

function drawRectangular_2_6(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(100,100,200,200);
    context.fill();
    context.stroke();
}
function drawRectangular_2_7(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(110,110,180,180);
    context.fill();
    context.stroke();
}

function drawRectangular_2_8(){

    context.fillStyle = getRandomColor();
    context.beginPath();
    context.rect(120,120,160,160);
    context.fill();
    context.stroke();
}