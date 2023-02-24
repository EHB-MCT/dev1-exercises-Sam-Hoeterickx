"use script";

let context;

setup();
/* drawRectangular_referentie(); */
drawRectangular_linksboven_rood();
drawRectangular_rechtsonder_rood();
drawRectangular_midden_zwart();
drawRectangular_klein_zwart_boven();
drawRectangular_klein_zwart_onder();
drawRectangular_klein_rood_rechts();
drawRectangular_klein_rood_links();


function setup(){

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawRectangular_linksboven_rood(){
    context.fillStyle = "white";
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(50,50,150,150);
    context.fill();
    context.stroke();  

}

function drawRectangular_referentie(){

    context.fillStyle = "white";
    context.strokeStyle = "blue";
    context.beginPath();
    context.rect(50,50,350,350);
    context.fill();
    context.stroke();  
}

function drawRectangular_rechtsonder_rood(){
    context.fillStyle = "white";
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(400,400,-150,-150);
    context.fill();
    context.stroke();  
}

function drawRectangular_midden_zwart(){

    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(150,150,150,150);
    context.fill();
    context.stroke();  
    
}

function drawRectangular_klein_zwart_boven(){

    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(375,50,25,25);
    context.fill();
    context.stroke();  
}

function drawRectangular_klein_zwart_onder(){

    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.beginPath();
    context.rect(50,375,25,25);
    context.fill();
    context.stroke();  
}

function drawRectangular_klein_rood_rechts(){

    context.fillStyle = "white";
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(300,75,75,75);
    context.fill();
    context.stroke();  
    }

    function drawRectangular_klein_rood_links(){

        context.fillStyle = "white";
        context.strokeStyle = "red";
        context.beginPath();
        context.rect(75,300,75,75);
        context.fill();
        context.stroke();  
        }
