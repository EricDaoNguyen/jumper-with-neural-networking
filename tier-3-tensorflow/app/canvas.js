let jumpers = []
let jumperSprite
const totaljumpers = 100
let savedJumpers = []
let blockers = []
let imageBackground
let backgroundMusic
let counter = 0
let cycleSlider

// Preloads
function preload() {
  imageBackground = loadImage(`../assets/background.jpg`)
  jumperSprite = loadImage(`../assets/goat.png`)
  backgroundMusic = loadSound(`../assets/backgroundMusic.mp3`)
}

// Canvas
function setup() {
  createCanvas(700, 700)
  tf.setBackend('cpu')
  cycleSlider = createSlider(1, 10, 1)
  backgroundMusic.play()
  backgroundMusic.loop()
  for(let i = 0; i < totaljumpers; i++) { jumpers[i] = new Jumper() }
}

// Renderer
function draw() {
  image(imageBackground, 0, 0)
  for(let jumper of jumpers) { jumper.show() }
  for(let blocker of blockers) { blocker.show() }

  for(let cycle = 0; cycle < cycleSlider.value(); cycle++) {
    // New set of blockers every 80 frames per second
    if(counter % 80 === 0) { blockers.push(new Blocker()) }
    counter++

    // New set of jumpers
    for(let jumper of jumpers) {
      jumper.update()
      jumper.think(blockers)
    }

    // Reset with the next generation when all jumpers are eliminated
    if(jumpers.length === 0) {
      counter = 0
      nextGeneration()
      blockers = []
    }

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
        if(blockers[i].hit(jumpers[j])) { savedJumpers.push(jumpers.splice(j, 1)[0]) }
      }
    }
  }
}
