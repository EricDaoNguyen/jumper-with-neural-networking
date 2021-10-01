// Canvas
function setup() {
  createCanvas(750, 750);
  background(0);
}

// Renderer
function draw() {
  jumper = new Jumper()
  jumper.show()
}
