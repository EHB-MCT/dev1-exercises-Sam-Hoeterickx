"use strict";

let context;

set_up();

drawRectangular_Oranje_ster();
drawarc_Wit_1();
drawarc_Wit_2();
drawarc_Wit_3();
drawarc_Wit_4();
drawDiagonal();
drawLine_orange_outline();
drawRectangular_oranje_klein();
drawCross();




function set_up(){
    
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawarc_Wit_1(){

    context.fillStyle = "white";
    context.beginPath();
    context.arc(50,50,150,0,2*Math.PI,false);
    context.fill();
}

function drawarc_Wit_2(){

    context.fillStyle = "white";
    context.beginPath();
    context.arc(350,350,150,0,2*Math.PI,false);
    context.fill();
}

function drawarc_Wit_3(){

    context.fillStyle = "white";
    context.beginPath();
    context.arc(50,350,150,0,2*Math.PI,false);
    context.fill();
}

function drawarc_Wit_4(){

    context.fillStyle = "white";
    context.beginPath();
    context.arc(350,50,150,0,2*Math.PI,false);
    context.fill();
}


function drawRectangular_Oranje_ster(){

    context.fillStyle = "orange";
    context.strokeStyle = "orange";
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();
    context.stroke();
}



function drawDiagonal(){

    context.strokeStyle = "white";
    context.lineWidth = "5";
    context.beginPath();
   
    //linksboven naar rechts onder (door het midden)
    context.moveTo(60,60);
    context.lineTo(185,188);
    context.stroke();

    context.moveTo(220,217);
    context.lineTo(345,345);
    context.stroke();

    context.moveTo(95,60);
    context.lineTo(380,345);
    context.stroke();

    context.moveTo(130,60);
    context.lineTo(415,345);
    context.stroke();

    context.moveTo(60,95);
    context.lineTo(310,345);
    context.stroke();

    context.moveTo(60,130);
    context.lineTo(275,345);
    context.stroke();

    //rechtsboven naar links onder (door het midden)
    context.moveTo(183,220);
    context.lineTo(60,345);
    context.stroke();

    context.moveTo(345,60);
    context.lineTo(220,187);
    context.stroke();
 

    context.moveTo(345,95);
    context.lineTo(60,380);
    context.stroke();

    context.moveTo(345,130);
    context.lineTo(60,415);
    context.stroke();
    
    context.moveTo(310,60);
    context.lineTo(60,310);
    context.stroke();

    
    context.moveTo(275,60);
    context.lineTo(60,275);
    context.stroke();

}
function drawLine_orange_outline(){

    context.strokeStyle = "orange";
    context.lineWidth = "5";
    context.beginPath();
    context.moveTo(55,55);
    context.lineTo(345,55);
    context.lineTo(345,345);    
    context.lineTo(55,345);
    context.lineTo(55,52.5);
    context.stroke();
}

/* function drawRectangular_oranje_klein(){

    context.strokeStyle = "orange";
    context.lineWidth = "7";
    context.beginPath();
    context.moveTo(165,205);
    context.lineTo(203,168);
    context.lineTo(237.5,202);
    context.lineTo(202.5,237);
    context.lineTo(166,201);
    context.stroke();
}

function drawCross(){

    context.strokeStyle = "orange";
    context.lineWidth = "10";
    context.beginPath();
    context.moveTo(184,185);
    context.lineTo(218,219)
    context.moveTo(185,220)
    context.lineTo(220,184)
    context.stroke();

} */