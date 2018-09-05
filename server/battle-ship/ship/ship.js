const Position = require('../field/position')

class Ship {
  constructor(length) {
    this.parts = []

    this.length = length

    this.explosed = false
  }

  buildNewPart(placeForNewPart) {
    var newPart = new Position(placeForNewPart.x, placeForNewPart.y)
    this.parts.push(newPart)
  }

  buildShip(parts) {
    this.parts = parts
  }
}

module.exports = Ship