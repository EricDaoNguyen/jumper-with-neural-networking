const totalJumpers = 100

function nextGeneration() {
  calculateFitness()
  for(let i = 0; i < totalJumpers; i++) { jumpers[i] = pickJumper() }
  savedJumpers = []
  console.log(`New generation loaded.`)
}

// Each fitness value is a probability for the next generation
function calculateFitness() {
  let result = 0
  for(let jumper of savedJumpers) { result += jumper.score }
  for(let jumper of savedJumpers) { jumper.fitness = jumper.score / result }
}

// Simplified crossover, instead of combining data of two parents, we're just making a copy
function pickJumper(jumpers) {
  let index = 0
  let rand = random(1)
  while(rand > 0) {
    rand = rand - savedJumpers[index].fitness
    index++
  }
  index--
  let jumper = savedJumpers[index]
  let child = new Jumper(jumper.brain)
  // child.mutate()
  return child
}
