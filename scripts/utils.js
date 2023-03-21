"use strict";
import context from "./context.js";
/**
 * 
 * @param {number} x1  x start
 * @param {number} y1  y start
 * @param {number} x2  x einde
 * @param {number} y2  y einde
 */
export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function strokeCircle(x,y,r){
    context.beginPath();
    context.strokeStyle = "white";
    context.arc(x,y,r,0,Math.PI*2,false);
    context.stroke();
}



export function fillCircle(x,y,r){
    context.beginPath();
    context.arc(x,y,r,0,2*Math.PI);
    context.fill();
}

export function calculateDistance(x1,y1,x2,y2){
    return Math.hypot(x2 - x1, y2 - y1);
}

export function crossH(x1,y1,x2,y2){
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
