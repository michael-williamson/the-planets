"use strict";

function rotate() {
  let r = 150;
  let rDiff = 200;

  $("#orbit-ring li").each(function () {
    let pos = $(this).position();

    let elemPosX = pos.left;
    let elemPosY = pos.top;

    let angle = Math.atan2(elemPosY - 150, elemPosX - 150);

    angle += 0.8;

    let y = Math.sin(angle) * r + 150;

    let x = Math.cos(angle) * r + 150;

    let yPixel = `${y}px`;
    let xPixel = `${x}px`;

    this.style.left = xPixel;
    this.style.top = yPixel;
  });
}

function placement() {
  let plots = 9;

  let increase = (Math.PI * 2) / plots;

  let angle = 0;

  $("#orbit-ring li").each(function () {
    let r = 200;
    let rDiff = 200;

    let y = Math.sin(angle) * r + rDiff;

    let x = Math.cos(angle) * r + rDiff;

    let yPixel = `${y}px`;
    let xPixel = `${x}px`;

    this.style.left = xPixel;
    this.style.top = yPixel;

    angle += increase;
  });
}

placement();

// window.setInterval(rotate, 2000);

//Javascript clock

function clock() {
  let currentTime = new Date();

  currentTime = currentTime.toString();
  currentTime = currentTime.substr(15, 9);

  $("#clock p").text(currentTime);
}

clock();

window.setInterval(clock, 1000);
