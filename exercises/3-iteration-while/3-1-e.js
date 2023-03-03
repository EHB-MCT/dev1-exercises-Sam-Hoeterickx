"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 1;
    while (i <=7) {
        Utils.drawLine(175+(25*i),25+(25*i),25+(25*i),175+(25*i));
        Utils.drawLine(25+(25*i),225-(25*i),175+(25*i),375-(25*i));
        i++ ;
    }
}

/* 175+(25*i),30+(20*i), 28+(25*i), 210+(20*i) */
/* 265-(37.5*i),+(15*i),390-(37.5*i),190+(15*i) */