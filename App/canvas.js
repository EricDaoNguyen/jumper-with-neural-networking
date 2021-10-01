let jumper
let blockers = []

// Canvas
function setup() {
  createCanvas(500, 500);

  jumper = new Jumper()

  blockers.push(new Blocker())
}

// Renderer
function draw() {
  background(0);

  jumper.show()
  jumper.update()

  // New set of blockers every 80 frames per second
  if(frameCount % 80 === 0) { blockers.push(new Blocker()) }

  for(let i = blockers.length - 1; i >= 0; i--) {
    blockers[i].show()
    blockers[i].update()

    // Remove blockers as soon as they are off left of canvas
    if(blockers[i].offCanvas()) {
      blockers.splice(i, 1)
      console.log(`Current length of blockers array: ${blockers.length}`)
    }

    if(blockers[i].hit(jumper)) { gameOver() }
  }
}
