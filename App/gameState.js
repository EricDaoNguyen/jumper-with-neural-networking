let isOver = false

function gameOver() {
  textSize(64)
  fill(255, 0, 0)
  textAlign(CENTER, CENTER)
  textStyle(BOLD)
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
