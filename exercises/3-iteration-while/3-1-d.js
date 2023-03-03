"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    let i = 1;
    while (i <= 7) {
        Utils.drawLine(30+(20*i), 175+(25*i), 210+(20*i), 28+(25*i));
        i++ ;
    }
}