// Blocker
function Blocker() {
  // Positions of top and bottom blockers
  this.x = width
  this.top = random(height / 2)
  this.bottom = random(height / 2)
  this.blockerWidth = 20

  // Speed of blockers
  this.speed = 2

  // Blocker sprites
  this.show = function() {
    fill(255)
    rect(this.x, 0, this.blockerWidth, this.top) // Top blocker
    rect(this.x, height - this.bottom, this.blockerWidth, this.bottom) // Bottom blocker
  }

  // Move blockers towards jumper
  this.update = function() {
    this.x -= this.speed
  }

  // Removed blockers that pass the left of canvas to avoid stacking the array length
  this.offCanvas = function() {
    if(this.x < -this.blockerWidth) { return true }
    else { return false }
  }
}
