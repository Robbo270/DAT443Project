/* var WidthRect = 70;
var heightRect = 70;
var particles = []; */

var c1 = function(p){

    var WidthRect = 70;
var heightRect = 70;

    p.setup = function() {
    p.cursor(CROSS,32,32)
    var canvas = createCanvas(1000,1000);
    canvas.parent('#sketch1');
    p.background(0)
}

let colorPicker;
p.setup = function() {
    myColor =  p.createColorPicker(p.color(255));
  p.createCanvas(80, 80);
  colorPicker = p.createColorPicker('#ed225d');
  colorPicker.position(50, p.height);
  myColor.position(100, p.height);
  p.cursor(p.CROSS,32,32)
    var canvas = p.createCanvas(innerWidth,innerHeight-100);
    canvas.parent("sketch1");
    p.background(colorPicker.color());
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
    p.fill(myColor.color());
    p.ellipseMode(p.CENTER)
    p.ellipse(p.mouseX, p.mouseY, WidthRect, heightRect);
    }
}

p.keyPressed = function() {
    if(p.keyCode == p.ENTER){
        background(colorPicker.color());
    }
    if(p.key === 's'){
        p.saveCanvas('myCanvas', 'jpg');
    }
}
}



var c2 = function(p){
    p.setup = function() {
        var canvas = p.createCanvas(800, 800);
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
        var hue = p.random(120, 255)
        p.noStroke();
        p.fill(hue, 255, 255, 0.1);
        p.circle(x, y, d);
    }
}

var sketch1 = new p5(c1);

var sketch2 = new p5(c2);