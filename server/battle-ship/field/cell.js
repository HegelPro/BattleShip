const Position = require('./position') 

 class Cell extends Position {
  constructor(x, y, params) {
    super(x, y)

    this.hasShip = false
    this.hasFire = false
    this.changeable = true

    if(params !== undefined) {
      for (let param in params) {
        this[param] = params[param]
      } 
    } 
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