const Position = require('../field/position')

class Ship {
  constructor() {
    this.parts = []
  }

  buildNewPart(position) {
    this.parts.push(position)
  }

  buildShip(parts) {
    this.parts = parts
  }
}

module.exports = Ship