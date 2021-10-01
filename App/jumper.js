// Jumper
function Jumper() {
  // Starting position
  this.x = 64
  this.y = height / 2

  // Push and pull force
  this.gravity = 0.5
  this.lift = 10.5
  this.velocity = -8.5

  // Jumper sprite
  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 20, 20)
  }

  // Jumper jumps
  this.up = function() {
    this.velocity -= this.lift + 3
  }

  this.update = function() {
    // Jumper falls
    this.velocity += this.gravity
    this.y += this.velocity

    // Prevents jumper from going off top and bottom of canvas
    if(this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
    if(this.y > height) {
      this.y = height
      this.velocity = 0
    }
  }
}
