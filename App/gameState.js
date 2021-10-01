let isOver = false

function gameOver() {
  textSize(32)
  textAlign(CENTER, CENTER)
  text(`GAME OVER`, height / 2, width / 2)
  isOver = true
  noLoop()
}

function reset() {
  isOver = false
  jumper = new Jumper()
  blockers = []
  loop()
}
