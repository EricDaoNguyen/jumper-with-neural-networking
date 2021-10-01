// Canvas
function setup() {
  createCanvas(750, 750);
  jumper = new Jumper()
}

// Renderer
function draw() {
  background(0);
  jumper.show()
  jumper.update()
}
