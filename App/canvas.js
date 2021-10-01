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

  for(let i = 0; i < blockers.length; i++) {
    blockers[i].show()
    blockers[i].update()
  }
}
