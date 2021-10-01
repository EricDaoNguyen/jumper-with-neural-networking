// Jumper
function Jumper() {
  // Starting position
  this.x = 64
  this.y = height / 2

  // Pull force
  this.gravity = 1
  this.velocity = 0

  // Jumper sprite
  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 20, 20)
  }

  this.update = function() {
    // Jumper falls
    this.velocity += this.gravity
    this.y += this.velocity

    // Jumper stops at bottom of canvas
    if(this.y > height) {
      this.y = height
      this.velocity = 0
    }
  }
}
