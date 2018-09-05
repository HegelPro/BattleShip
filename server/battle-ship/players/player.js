const Field = require('../field/field')
const Position = require('../field/position')
const Cell = require('../../battle-ship/field/cell')

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
    ship.explosed = true
    ship.parts.forEach( part => this._field.setSpaceAroundCell(part, 'hasFire', true) )
    if( this._isGameEnd() )
      this._gameEmitter.emit('endGame')
  }

  _isGameEnd() {
    return this._field.ships.every( ship => ship.explosed )
  }

  _switchPlayer() {
    throw '_switchTurn() Не реализовона в этом классе'
  }
  
  getFieldHidden() {
    var field = Object.assign({}, this._field)
    
    field._cells = field._cells.slice().map( cell => {
      if( cell.hasFire ) return cell
      return new Cell(cell.x, cell.y)
    })
    field.ships = field.ships.slice().map( ship => { return {explosed: ship.explosed, length: ship.length} } )

    return field
  }
}

module.exports = Player