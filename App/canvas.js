// Canvas
function setup() {
  createCanvas(500, 500);
  jumper = new Jumper()
}

// Renderer
function draw() {
  background(0);
  jumper.show()
  jumper.update()
}
