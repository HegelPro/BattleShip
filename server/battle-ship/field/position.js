class Position {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  setPosition(newPosision) {
    this.x = newPosision.x
    this.y = newPosision.y
  }

  static equal(posisionOne, posisionTwo) {
    return (posisionOne.x === posisionTwo.x && posisionOne.y === posisionTwo.y) ? true : false;
  }
}

module.exports = Position