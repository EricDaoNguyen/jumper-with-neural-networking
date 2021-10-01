// Jumper
function Jumper() {
  // Starting position
  this.x = 64
  this.y = height / 2

  // Push and pull force
  this.gravity = 0.7
  this.lift = 15
  this.velocity = 0

  // Jumper sprite
  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 20, 20)
  }

  this.up = function() {
    this.velocity -= this.lift
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
