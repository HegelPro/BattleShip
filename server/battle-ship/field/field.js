const Position = require('./position')
const Cell = require('./cell')
const ShipBuilder = require('../ship/ship-builder')
const Ship = require('../ship/ship')


class Field {
  constructor() {
    this.cells = []
    this.ships 

    this.createEmptyField()
    this.putAllShips()
  }

  createEmptyField() {
    for (let y = 1; y <= 10; y++) {
      for (let x = 1; x <= 10; x++) {
        this.cells.push(new Cell(x, y))
      }
    }
  }

  putAllShips() {
    var lenghtOfCurrentShip = 4
    const SHIPS_AMOUNT = 10

    const shipBuilder = new ShipBuilder(this.cells, this.ships)

    for (let currentShip = 1, amountOfShipsCurrentType = 0, shouldBeThisAmountOfShipsCurrentType = 1 ; currentShip <= SHIPS_AMOUNT; currentShip++) {
      
      try {
        shipBuilder.buildShip(lenghtOfCurrentShip) // new

        if(currentShip === 1) lenghtOfCurrentShip--
        if(currentShip === 3) lenghtOfCurrentShip--
        if(currentShip === 6) lenghtOfCurrentShip--

        // if(amountOfShipsCurrentType === shouldBeThisAmountOfShipsCurrentType) {
        //   amountOfShipsCurrentType = 0
        //   shouldBeThisAmountOfShipsCurrentType++
        //   lenghtOfCurrentShip--
        // }
      } catch (e) {
        console.error(e);
        
        amountOfShipsCurrentType--
        currentShip--
      }
    }

    this.ships = shipBuilder.getShips()
  }
}

module.exports = Field