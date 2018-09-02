const { generateRandomNumber } = require('../../helper')
const Position = require('../../field/position')

class CompEasyLevel {
  constructor() {
  }

  fire(field) {
    var avaibleCells = this.randomPoint(field)
    // var doFire = avaibleCells[ generateRandomNumber(avaibleCells.length) - 1 ]
    return avaibleCells[ generateRandomNumber(avaibleCells.length) - 1 ]
    // doFire.hasFire = true
    
    // if(doFire.hasShip) {
    //   this._maybeExplose(doFire, field)
    //   this.fire(field)
    // }
  }

  _maybeExplose(position, field) {
    field.ships.forEach( ship => {
      ship.parts.forEach( part => {
        if( Position.equal(position, part) ) {
          if( ship.parts.every( elem  => field._cells[ this._getIndexInCells(elem, field) ].hasFire )) this._explose(field, ship)
        }
      })
    })
  }

  _explose(field, ship) {
    ship.parts.forEach( part => {
      this._fireSpaceAroundParkOfShip( field._cells[ this._getIndexInCells(part, field) ], field )
    })
  }

  randomPoint(field) {
    return field._cells.filter( cell => !cell.hasFire )
  }

  _fireSpaceAroundParkOfShip(cell, field) {
    var startX = cell.x - 1
    var startY = cell.y - 1
    var endX = cell.x + 1
    var endY = cell.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        var checkPosition = new Position(x, y)
        if( field._cellOnField( checkPosition ) ) {
          field._cells[ this._getIndexInCells(checkPosition, field) ].hasFire = true
        }
      }
    }
  }

  _getIndexInCells(position, field) {
    return (position.y - 1) * field.MAX_Y + (position.x - 1)
  }
}

module.exports = CompEasyLevel