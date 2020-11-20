const barWidth = 20;
let lastBar = -1;
let sketch;

function setup() {
  sketch = createCanvas(600,windowHeight);
  sketch.parent("p5");
  
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}


