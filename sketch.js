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

// Jumper
function Jumper() {
  // Starting position
  this.x = 30
  this.y = height / 2

  // Jumper sprite
  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 15, 15)
  }
}
