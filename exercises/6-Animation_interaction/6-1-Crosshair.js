"use strict";

import context from "../../../scripts/context.js"
import * as Utils from "../../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;


window.onmousemove = move;

context.fillRect(0,0,width,height);

/**
 * 
 * @param {MouseEvent} eventData
 */
function move(eventData){
    let x = eventData.pageX;
    let y = eventData.pageY;
    
    //clear canvas
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);

    context.fillStyle = "red";
    Utils.crossH(x,y,width+5000,y)      // horizontaal rechts
    Utils.crossH(x,y,width-5000,y)      // horizontaal links
    Utils.crossH(x,y,x,height+5000)     //verticaal onder
    Utils.crossH(x,y,x,height-5000)     // verticaal boven

   /*  Utils.fillCircle(x,y,25); // moet crosshair worden */
}
