const Position = require('./position') 

 class Cell extends Position {
  constructor(x, y) {
    super(x, y)

    this.hasShip = false
    this.hasFire = false
    this.changeable = true
  }

  putShip() {
    this.hasShip = true
  }

  getFire() {
    this.hasFire = true
  }

  setChangeable(bool) {
    this.changeable = bool
  }

  isChangeable() {
    return this.changeable
  }
}

module.exports = Cell