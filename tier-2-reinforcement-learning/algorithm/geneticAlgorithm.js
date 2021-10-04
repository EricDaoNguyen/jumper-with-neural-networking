const totalJumpers = 200

function nextGeneration() {
  calculateFitness()
  for(let i = 0; i < totalJumpers; i++) { jumpers[i] = pickJumper() }
  savedJumpers = []
  console.log(`New generation loaded.`)
}

// Each fitness value is a probability for the next generation
function calculateFitness() {
  let result = 0
  for(let jumper of jumpers) { result += jumper.score }
  for(let jumper of jumpers) { jumper.fitness = jumper.score / result }
}

// Simplified crossover, instead of combining data of two parents, we're just making a copy
function pickJumper() {
  let child = random(savedJumpers)
  return child
}
