/* var WidthRect = 70;
var heightRect = 70;
var particles = []; */

var c1 = function(p){

    var WidthRect = 70;
var heightRect = 70;

    p.setup = function() {
    p.cursor(CROSS,32,32)
    var canvas = createCanvas(80,80);
    canvas.parent('#sketch1');
    p.background(0)
    frameRate(fr);
        let fr = 165;
}

let colorPicker;
p.setup = function() {
    myColor =  p.createColorPicker(p.color(0));
  p.createCanvas(80, 80);
  colorPicker = p.createColorPicker('#ffffff');
  colorPicker.position(230, p.height);
  myColor.position(280, p.height);
  p.cursor(p.CROSS,32,32)
    var canvas = p.createCanvas(800,800);
    canvas.parent("sketch1");
    p.background(colorPicker.color());

//creates the button
  button = p.createButton('Press to Randomise Background');
  button.position(130, 120);
  button.mousePressed(changeBG)

  button = p.createButton('Press "S" to save');
  button.position(185, 180);

  button = p.createButton('Press "Enter" to Clear Page');
  button.position(140, 240);
}

p.draw = function(){
    if(p.mouseIsPressed === true){
        p.fill(myColor.color());
        p.noStroke();
    p.ellipseMode(p.CENTER)
    p.ellipse(p.mouseX, p.mouseY, 50);
    }
}

p.mousePressed = function() {
    if(p.mouseButton == p.LEFT){
    noStroke
    p.fill(myColor.color());
    p.ellipseMode(p.CENTER)
    p.ellipse(p.mouseX, p.mouseY, WidthRect, heightRect);
    }
}

p.keyPressed = function() {
    if(p.keyCode == p.ENTER){
        p.background(colorPicker.color());
    }
    if(p.key === 's'){
        p.saveCanvas('canvas1', 'jpg');
    }
}
//changes the background colour
function changeBG() {
    let val = p.random(255);
    p.background(val);
  }
}

//Drawing Canvas
var c2 = function(p){
    p.setup = function() {
        var canvas = p.createCanvas(800,800);
        canvas.parent('#sketch2');   
        p.background(0);
        p.colorMode(p.HSB);
        for(var i = 0; i < 500; i++){
            p.circles();  
        }
    }
    
    p.draw = function() {
    }
    
    p.circles = function() {
        var x = p.random(p.width);
        var y = p.random (p.height);
        var d = p.random(5, 150);
        var hue = p.random(110, 255)
        p.noStroke();
        p.fill(hue, 255, 255, 0.1);
        p.circle(x, y, d);
    }
}

var sketch1 = new p5(c1);

var sketch2 = new p5(c2);