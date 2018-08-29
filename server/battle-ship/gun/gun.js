const Position = require('../field/position')

class Gun {
  constructor(field, emitter) {
    this._field = field

    this._emitter = emitter
    this._listenHitsInShip()
  }

  _explose(ship) {
    ship.parts.forEach( part => {
      this._fireSpaceAroundParkOfShip( this._field._cells[ this._getIndexInCells(part) ] )
    })
  }

  _listenHitsInShip() {
    this._emitter.on('explose', ship => {
      this._explose(ship)
    }) 

    this._emitter.on('hitShip', (position) => {
      this._field.ships.forEach( ship => {
        ship.parts.forEach( part => {
          if( Position.equal(position, part) ) {
            if( ship.parts.every( elem  => this._field._cells[ this._getIndexInCells(elem) ].hasFire )) this._emitter.emit('explose', ship)
          }
        })
      })
    })
  }

  _fireSpaceAroundParkOfShip(cell) {
    var startX = cell.x - 1
    var startY = cell.y - 1
    var endX = cell.x + 1
    var endY = cell.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        var checkPosition = new Position(x, y)
        if( this._field._cellOnField( checkPosition ) ) {
          this._field._cells[ this._getIndexInCells(checkPosition) ].hasFire = true
        }
      }
    }
  }

  fire(position) {
    this._field._cells[this._getIndexInCells(position)].hasFire = true

    if( !this._field._cells[this._getIndexInCells(position)].hasShip ) {
      this._emitter.emit('switchPlayer')
    } else {
      this._emitter.emit('hitShip', position)
    }
  }

  _getIndexInCells(position) {
    return (position.y - 1) * this._field.MAX_Y + (position.x - 1)
  }
}

module.exports = Gun