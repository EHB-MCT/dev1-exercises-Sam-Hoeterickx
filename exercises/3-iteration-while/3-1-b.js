"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    context.strokeStyle = "white";
    drawGrid();
}

function drawGrid() {
    let i = 1;
    while (i<=6) {
        let x = 25;
        let y = x;
        Utils.drawLine(75, y+(50*i), 325, y+(50*i));
        Utils.drawLine(x+(50*i), 75, x+(50*i), 325);
        i++ ;
    }
}