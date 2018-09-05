const Ship = require('./ship')
const Position = require('../field/position')
const Builder = require('./builder')

class ShipBuilder {
  constructor() {
    this._ship
    this._builder
  }

  buildShip(shipLength, availablePositions) {
    try {
      this._ship = new Ship(shipLength)
      
      this._builder = new Builder(this._ship, availablePositions)

      for (let shipSection = 1; shipSection <= shipLength; shipSection++) {
        this._builder.buildNewPart()
      }

      this._builder.deleteNotAvaildePositionsFrom(availablePositions)
    } catch (e) {
      console.error(e)
      
      this.buildShip(shipLength, availablePositions)
    }
  }

  getShip() {
    return this._ship
  }
}

module.exports = ShipBuilder