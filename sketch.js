// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var hueFill1;
var hueFill2;
var hueFill3;
var satFill1;
var satFill2;
var satFill3;
var lightFill1;
var lightFill2;
var lightFill3;
var blur = 0;
var rect1X;
var rect1Y;
var rect1W;
var rect1H;
var rect2X;
var rect2Y;
var rect2W;
var rect2H;
var rect3X;
var rect3Y;
var rect3W;
var rect3H;

function setup() {
  var cnv = createCanvas(400, 600);
  cnv.parent("sketch-holder")
  colorMode(HSB, 100);
  frameRate(30);
}

function draw() {
  var hueBack = mouseX / 359 * 10;
  var satBack = mouseY / 99 * 8;
  background (hueBack, satBack, 50);
  noStroke();
  fill(hueFill1, satFill1, lightFill1);
  rect(rect1X, rect1Y, rect1W, rect1H);
  fill(hueFill2, satFill2, lightFill2);
  rect(rect2X, rect2Y, rect2W, rect2H);
  fill(hueFill3, satFill3, lightFill3);
  rect(rect3X, rect3Y, rect3W, rect3H);
  filter(BLUR, blur);
}

function keyTyped() {
  if (key === 'q') {
    rect1X = 20;
    rect1Y = 30;
    rect1W = 360;
    rect1H = 200;
    rect2X = 20;
    rect2Y = 240;
    rect2W = 360;
    rect2H = 350;
    rect3X = 0;
    rect3Y = 0;
    rect3W = 0;
    rect3H = 0;
  }
  if (key === 'w') {
    rect1X = 25;
    rect1Y = 25;
    rect1W = 350;
    rect1H = 400;
    rect2X = 25;
    rect2Y = 430;
    rect2W = 350;
    rect2H = 50;
    rect3X = 25;
    rect3Y = 485;
    rect3W = 350;
    rect3H = 90;
  }
  if (key === 'e') {
    rect1X = 30;
    rect1Y = 50;
    rect1W = 340;
    rect1H = 80;
    rect2X = 30;
    rect2Y = 145;
    rect2W = 340;
    rect2H = 330;
    rect3X = 30;
    rect3Y = 485;
    rect3W = 340;
    rect3H = 100;
  }
  if (key === 'r') {
    rect1X = 20;
    rect1Y = 20;
    rect1W = 360;
    rect1H = 400;
    rect2X = 25;
    rect2Y = 425;
    rect2W = 350;
    rect2H = 150;
    rect3X = 0;
    rect3Y = 0;
    rect3W = 0;
    rect3H = 0;
  }
  else if (key === 'a') {
    hueFill1 = random(0, 359);
    satFill1 = random(10, 75);
    lightFill1 = random(10, 75);
  }
  else if (key === 's') {
    hueFill2 = random(0, 359);
    satFill2 = random(10, 75);
    lightFill2 = random (10, 75);
  }
  else if (key === 'd') {
    hueFill3 = random(0, 359);
    satFill3 = random(10, 75);
    lightFill3 = random (10, 75);
  }
  else if (key === 'b') {
    if (blur < 5) {
      blur = blur + 1; 
    }
  }
  else if (key === 'v') {
    if (blur > 0){
      blur = blur - 1;
    }
  }
  else if (key === 'f') {
    noLoop();
    }
  else if (key === 'g') {
    loop();
    }
  }