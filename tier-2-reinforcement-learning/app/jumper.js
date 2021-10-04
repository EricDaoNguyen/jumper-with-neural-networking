// Jumper
function Jumper() {
  // Starting position
  this.x = 128
  this.y = height / 2

  // Push and pull force
  this.gravity = 0.5
  this.lift = 10.5
  this.velocity = -8.5

  // Jumper sprite
  this.icon = jumperSprite
  this.height = 128
  this.width = 128
  this.show = function() { image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height) }

  // Jumper jumps
  this.up = function() { this.velocity -= this.lift + 3 }

  // Jumper jumps on it's own
  this.brain = new NeuralNetwork(4, 4, 1)
  this.think = function() {
    let input = [1.0, 0.5, 0.2, 0.3]
    let output = this.brain.predict(input)

    if(output > 0.5) { Jumper.up() }
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
