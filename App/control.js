function keyPressed() {
  if(key === ` `) {
    jumper.up()
    if(isOver) { reset() }
  }
  if(key === `1`) {
    resizeCanvas(500, 500)
    reset()
  }
  if(key === `2`) {
    resizeCanvas(1000, 1000)
    reset()
  }
  if(key === `3`) {
    resizeCanvas(1500, 1500)
    reset()
  }
}
