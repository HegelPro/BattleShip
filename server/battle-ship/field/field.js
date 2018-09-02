const Position = require('./cell')
const Cell = require('./cell')
const ShipBuilder = require('../ship/ship-builder')

class Field {
  constructor(emitter) {
    this.MAX_X = 10
    this.MIN_X = 1
    this.MAX_Y = 10
    this.MIN_Y = 1
    this._cells = []
    this.ships = []

    this._emitter = emitter

    this._createEmptyField()
  }

  _createEmptyField() {
    for (let y = 1; y <= this.MAX_Y; y++) {
      for (let x = 1; x <= this.MAX_X; x++) {
        this._cells.push(new Cell(x, y))
      }
    }
  }

  putAllShips() {
    this._cells =[]
    this._createEmptyField()

    var lenghtOfCurrentShip = 4
    const SHIPS_AMOUNT = 10

    const shipBuilder = new ShipBuilder()

    for (let currentShip = 1, amountOfShipsCurrentType = 0, shouldBeThisAmountOfShipsCurrentType = 1 ; currentShip <= SHIPS_AMOUNT; currentShip++) {
      shipBuilder.buildShip(lenghtOfCurrentShip, this._getAvaiblePositions())
      this._putShipOnField(shipBuilder.getShip())

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
      if(cell.changeable) {
        avaiblePosition.push(new Position(cell.x, cell.y))
      }
    })

    return avaiblePosition
  }

  _putShipOnField(ship) {
    this.ships.push(ship)

    ship.parts.forEach( part => {
      this._cells[ this.getIndexInCells(part) ].putShip()
      this._markSpaceAroundParkOfShip(part)
    })
  }

  _markSpaceAroundParkOfShip(cell) {
    var startX = cell.x - 1
    var startY = cell.y - 1
    var endX = cell.x + 1
    var endY = cell.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        var checkPosition = new Position(x, y)
        if( this._cellOnField( checkPosition ) ) {
          this._cells[ this.getIndexInCells(checkPosition) ].changeable = false
        }
      }
    }
  }

  _cellOnField(cell) {
    return cell.x >= this.MIN_X && cell.x <= this.MAX_X && cell.y >= this.MIN_Y && cell.y <= this.MAX_Y
  }

  _canHaveShip(cell) {
    return this._cells[ this.getIndexInCells(cell) ].isChangeable()
  }

  getIndexInCells(cell) {
    return (cell.y - 1) * this.MAX_Y + (cell.x - 1)
  }

  log() {
    var border = ''
    for (let index = 0; index < this.MAX_X + 2; index++) {
      border += '_'
    }

    console.log(border);
    
    for (let index = 1, str = '|'; index <= this._cells.length; index++) {
      str += this._cells[index - 1].toChar()

      if(index % this.MAX_X === 0) {
        console.log(str + '|');
        str = '|'
      }
    }
    console.log(border);
  }
}

module.exports = Field