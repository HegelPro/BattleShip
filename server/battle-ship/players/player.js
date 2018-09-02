const Field = require('../field/field')
const Position = require('../field/position')

class Player {
  constructor() {
    this.canFire = false

    this._field = new Field()
  }

  getField() {
    return this._field
  }

  putShips() {
    this._field.putAllShips()
  }

  getFire(position) {
    this._field._cells[this._field.getIndexInCells(position)].hasFire = true

    var ship = this._field.ships.find( ship => ship.parts.some( part => Position.equal(part, position) ) )

    if(ship !== undefined && this._shipShouldExplode(ship) )
      this._exlplodeShip(ship)
    if(ship === undefined)
      this._switchPlayer()
  }

  _shipShouldExplode(ship) {
    return ship.parts.every( part => {return this._field._cells[ this._field.getIndexInCells(part) ].hasFire})
  }

  _exlplodeShip(ship) {
    ship.parts.forEach( part => this._fireSpaceAroundParkOfShip(part) )
  }

  _switchPlayer() {
    throw '_switchTurn() Не реализовона в этом классе'
  }

  _fireSpaceAroundParkOfShip(cell) {  // TODO перенести в field
    var startX = cell.x - 1
    var startY = cell.y - 1
    var endX = cell.x + 1
    var endY = cell.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        var checkPosition = new Position(x, y)
        if( this._field._cellOnField( checkPosition ) ) {
          this._field._cells[ this._field.getIndexInCells(checkPosition) ].hasFire = true
        }
      }
    }
  }
}

module.exports = Player