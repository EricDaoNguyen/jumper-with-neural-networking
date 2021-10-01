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
