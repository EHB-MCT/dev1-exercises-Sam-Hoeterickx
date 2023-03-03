"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    context.strokeStyle = "white";
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let step = 150
         ;
        Utils.drawLine(50, step+(25*i), 350, step+(25*i));
        Utils.drawLine(step+(25*i), 50, step+(25*i), 350);
        i++ ;
    }
}