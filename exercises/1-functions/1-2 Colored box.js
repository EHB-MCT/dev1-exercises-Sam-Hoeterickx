"use script";

let context;
setup();

drawLine_kruis();
drawLine_vierkant();


function setup(){
    let canvas= document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawLine_kruis(){

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.moveTo(200,50);
    context.lineTo(50,200);
    
    context.stroke();
}
function drawLine_vierkant(){

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,200);
    context.lineTo(200,200);
    context.lineTo(200,50);
    context.lineTo(50,50);

    context.stroke();
}

