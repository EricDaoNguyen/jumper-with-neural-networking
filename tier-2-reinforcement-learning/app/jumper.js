// Jumper
class Jumper {
  constructor() {
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

    // Jumper brain
    this.brain = new NeuralNetwork(4, 4, 2)
  }

  // Show jumper sprite
  show() { image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height) }

  // Jumper jumps
  up() { this.velocity -= this.lift + 3 }

  update() {
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

  // Allows jumper to jump on it's own
  think(blockers) {
    // Finds closest blocker
    let closestBlocker = null
    let closestDistance = Infinity
    for(let i = 0; i < blockers.length; i++) {
      let distance = blockers[i].x - this.x
      if(distance < closestDistance && distance > 0) {
        closestBlocker = blockers[i]
        closestDistance = distance
      }
    }

    let input = []
    input[0] = this.y / height
    input[1] = closestBlocker.top / height
    input[2] = closestBlocker.bottom / height
    input[3] = closestBlocker.x / width
    let output = this.brain.predict(input)
    if(output[0] > output[1]) { this.up() }
  }
}
