function keyPressed() {
  if(key === ` `) {
    jumper.up()
    if(isOver) { reset() }
  }
}
