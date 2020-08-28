
let sketch

function setup() {
  sketch = createCanvas(700, 400);
  sketch.parent("p5")
}

function draw() {
  for (i = 0; i < 20; i++) {stroke(random(255), random(255), random(255))
  strokeWeight (2)
  line( width/2, height/2, random(width), random(height));}
  }
  
