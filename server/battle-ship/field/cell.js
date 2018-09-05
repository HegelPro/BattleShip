const Position = require('./position') 

 class Cell extends Position {
  constructor(x, y) {
    super(x, y)

    this.hasShip = false
    this.hasFire = false
    this.changeable = true
  }
}

module.exports = Cell