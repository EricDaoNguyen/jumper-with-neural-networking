// Blocker
class Blocker {
  constructor() {
    // Positions of top and bottom blockers
    this.x = width
    this.top = random(height / 2)
    this.bottom = random(height / 2)
    this.blockerWidth = 70

    // Speed of blockers
    this.speed = 7
  }

  // Blocker sprites
  show() {
    fill(255, 105, 180)
    rect(this.x, 0, this.blockerWidth, this.top, 10) // Top blocker
    rect(this.x, height - this.bottom, this.blockerWidth, this.bottom, 10) // Bottom blocker
    stroke(color(255, 20, 147));
  }

  // Move blockers towards jumper
  update() { this.x -= this.speed }

  // Removed blockers that pass the left of canvas to avoid stacking the array length
  offCanvas() {
    if(this.x < -this.blockerWidth) { return true }
    else { return false }
  }

  hit(jumpers) {
    // Checks to see if jumper hits sides of blockers
    if(jumpers.y < this.top || jumpers.y > height - this.bottom) {
      // Checks to see if jumper hits within the blockers' spacing
      if(jumpers.x > this.x && jumpers.x < this.x + this.blockerWidth) { return true }
    }
    return false
  }
}
