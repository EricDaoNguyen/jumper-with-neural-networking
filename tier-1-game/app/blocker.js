// Blocker
function Blocker() {
  // Positions of top and bottom blockers
  this.x = width
  this.top = random(height / 2)
  this.bottom = random(height / 2)
  this.blockerWidth = 70

  // Speed of blockers
  this.speed = 4

  // Blocker sprites
  this.show = function() {
    fill(255, 105, 180)
    rect(this.x, 0, this.blockerWidth, this.top, 10) // Top blocker
    rect(this.x, height - this.bottom, this.blockerWidth, this.bottom, 10) // Bottom blocker
    stroke(color(255, 20, 147));
  }

  // Move blockers towards jumper
  this.update = function() { this.x -= this.speed }

  // Removed blockers that pass the left of canvas to avoid stacking the array length
  this.offCanvas = function() {
    if(this.x < -this.blockerWidth) { return true }
    else { return false }
  }

  this.hit = function(jumper) {
    // Checks to see if jumper hits sides of blockers
    if(jumper.y < this.top || jumper.y > height - this.bottom) {
      // Checks to see if jumper hits within the blockers' spacing
      if(jumper.x > this.x && jumper.x < this.x + this.blockerWidth) { return true }
    }
    return false
  }
}
