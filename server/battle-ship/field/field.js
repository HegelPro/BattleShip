const fieldConfig = require('../../config/field.json')

const Position = require('./cell')
const Cell = require('./cell')
const ShipBuilder = require('../ship/ship-builder')

class Field {
  constructor() {
    this.MAX_X = fieldConfig.MAX_X
    this.MIN_X = fieldConfig.MIN_X
    this.MAX_Y = fieldConfig.MAX_Y
    this.MIN_Y = fieldConfig.MIN_Y

    this._cells = []
    this._createEmptyField()
    
    this.ships = []
    this._SHIPS_AMOUNT = fieldConfig.SHIPS_AMOUNT
  }

  _createEmptyField() {
    this._cells = []
    this.ships = []
    
    for (let y = 1; y <= this.MAX_Y; y++) {
      for (let x = 1; x <= this.MAX_X; x++) {
        this._cells.push(new Cell(x, y))
      }
    }
  }

  putAllShips() {
    this._createEmptyField()

    const shipBuilder = new ShipBuilder()

    for (let lenghtOfCurrentShip = 4, currentShip = 1, amountOfShipsCurrentType = 0, shouldBeThisAmountOfShipsCurrentType = 1 ; currentShip <= this._SHIPS_AMOUNT; currentShip++) {
      shipBuilder.buildShip(lenghtOfCurrentShip, this._getAvaiblePositions())
      this._putShipOnField( shipBuilder.getShip() )

      amountOfShipsCurrentType++
      if( amountOfShipsCurrentType === shouldBeThisAmountOfShipsCurrentType ) {
        amountOfShipsCurrentType = 0
        shouldBeThisAmountOfShipsCurrentType++
        lenghtOfCurrentShip--
      }
    }
  }

  _getAvaiblePositions() {
    var avaiblePosition = []

    this._cells.forEach( cell => {
      if(cell.changeable)
        avaiblePosition.push(new Position(cell.x, cell.y))
    })

    return avaiblePosition
  }

  _putShipOnField(ship) {
    this.ships.push(ship)

    ship.parts.forEach( part => {
      this._cells[ this.getIndexInCells(part) ].hasShip = true
      this.setSpaceAroundCell(part, 'changeable', false)
    })
  }

  setSpaceAroundCell(cell, prop, bool) {
    var startX = cell.x - 1
    var startY = cell.y - 1
    var endX = cell.x + 1
    var endY = cell.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        var checkPosition = new Position(x, y)
        if( this._cellOnField(checkPosition) ) {
          this._cells[ this.getIndexInCells(checkPosition) ][prop] = bool
        }
      }
    }
  }

  _cellOnField(cell) {
    return cell.x >= this.MIN_X && cell.x <= this.MAX_X && cell.y >= this.MIN_Y && cell.y <= this.MAX_Y
  }

  _canHaveShip(cell) {
    return this._cells[ this.getIndexInCells(cell) ].changeable
  }

  getIndexInCells(cell) {
    return (cell.y - 1) * this.MAX_Y + (cell.x - 1)
  }
}

module.exports = Field