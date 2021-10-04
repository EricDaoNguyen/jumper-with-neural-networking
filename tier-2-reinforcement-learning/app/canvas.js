let jumpers = []
let jumperSprite
const totaljumpers = 200
let blockers = []
let imageBackground
let backgroundMusic

// Preloads
function preload() {
  imageBackground = loadImage(`../assets/background.jpg`)
  jumperSprite = loadImage(`../assets/goat.png`)
  backgroundMusic = loadSound(`../assets/backgroundMusic.mp3`)
}

// Canvas
function setup() {
  createCanvas(1000, 1000)
  backgroundMusic.play()
  backgroundMusic.loop()
  for(let i = 0; i < totaljumpers; i++) { jumpers[i] = new Jumper() }
  blockers.push(new Blocker())
}

// Renderer
function draw() {
  background(0);
  image(imageBackground, 0, 0)

  for(let jumper of jumpers) {
    jumper.show()
    jumper.update()
    jumper.think(blockers)
  }

  if(jumpers.length === 0) { nextGeneration() }

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
    if(blockers[i].hit(jumpers)) { gameOver() }

    // Eliminate jumpers that hit a blocker
    for(let j = jumpers.length - 1; j >= 0; j--) {
      if(blockers[i].hit(jumpers[j])) { jumpers.splice(j, 1) }
    }
  }
}
