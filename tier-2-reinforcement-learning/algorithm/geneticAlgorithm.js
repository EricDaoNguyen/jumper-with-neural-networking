const totalJumpers = 200

function nextGeneration() {
  for(let i = 0; i < totalJumpers; i++) { jumpers[i] = new Jumper() }
  console.log(`New generation loaded.`)
}
