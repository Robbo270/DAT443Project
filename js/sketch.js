var WidthRect = 70;
var heightRect = 70;
var particles = [];

function setup() {
    cursor(CROSS,32,32)
    var canvas = createCanvas(1200,1000);
    canvas.parent("p5container");
    background(0)
}

let colorPicker;
function setup(){
  createCanvas(80, 80);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(150, height + 5);
  cursor(CROSS,32,32)
    var canvas = createCanvas(1200,1000);
    canvas.parent("p5container");
    background(0)
}

function draw() {
    function draw() {
        background(colorPicker.color());
      }
    if(mouseIsPressed === true){
        fill(random(0,255), random(0,255), random(0,255))
        noStroke();
    ellipseMode(CENTER)
    ellipse(mouseX, mouseY, WidthRect, heightRect);
    }
}

function mousePressed() {

    if(mouseButton == LEFT){
        fill(new p5.Color())
    ellipseMode(CENTER)
    ellipse(mouseX, mouseY, WidthRect, heightRect);
    }
}

    if(mouseButton == RIGHT){
        fill(random(0,255), random(0,255), random(0,255))
    rectMode(CENTER)
    rect(mouseX, mouseY, WidthRect, heightRect);
}

function keyPressed() {
    if(keyCode == ENTER){
    background(0);
    }

    if(key === 'S'){
        saveCanvas('myCanvas', 'jpg');
    }
}


