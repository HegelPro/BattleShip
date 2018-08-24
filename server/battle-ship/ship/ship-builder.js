const Ship = require('../ship/ship')
const Cell = require('../field/cell')
const Position = require('../field/position')
const { generateRandomNumber, generateOrderDirection } = require('../helper')

class ShipBuilder {
  constructor(cells) {
    this.cells = cells
    this.ships = []
  }

  getShips() {
    return this.ships
  }

  buildShip(shipLenght) {
    var avaibleCells = this.cells.filter( cell => {
      return cell.isChangeable
    })
    var currentPosition = new Position()
    currentPosition.setPosition( avaibleCells[ generateRandomNumber(avaibleCells.length) - 1] )

    var ship = new Ship()

    try {
      for (let shipSection = 1; shipSection <= shipLenght; shipSection++) {
        currentPosition.setPosition( this.doStep(currentPosition) )

        ship.buildNewPart(new Position(currentPosition.x, currentPosition.y))
        
        this.cells[ (currentPosition.y - 1) * 10 + (currentPosition.x - 1) ].setChangeable(false)
      }

      ship.parts.forEach( elem => { 
        this.markSpaceAroundParkOfShip(elem)
        
        this.cells[ (elem.y - 1) * 10 + (elem.x - 1) ].putShip()
      })

      this.ships.push(ship)
    } catch (e) {
      console.error(e);

      ship.parts.forEach( elem => this.cells[ (elem.y - 1) * 10 + (elem.x - 1) ].setChangeable(true) )
    
      throw "ship didn't put"
    }
  }

  doStep(currentPosition) {
    var nextPosition = new Position( currentPosition.x, currentPosition.y )
    var orderDirections = generateOrderDirection()

    while(true) {
      var randomDirection = orderDirections.splice(0, 1)[0]

      this.tryDoStep(nextPosition, randomDirection)

      if(this.isValidStep(nextPosition)) {
        return nextPosition
      } else if(orderDirections.length === 0) {
        throw "Haven't directions"
      } else {
        nextPosition.setPosition(currentPosition)
      }
    }
  }

  tryDoStep(currentPosition, direction) {
    switch (direction) {
      case "top":
        currentPosition.y++
        break;
      case "right":
        currentPosition.x++
        break;
      case "bottom":
        currentPosition.y--
        break;
      case "left":
        currentPosition.x--
        break;
    }
  }

  cellOnField(position) {
    return position.x >= 1 && position.x <= 10 && position.y >= 1 && position.y <= 10
  }

  isValidStep(nextStep) {
    if( this.cellOnField(nextStep) && this.canHaveShip(nextStep) ) return true
    else return false
  }

  canHaveShip(position) {
    return this.cells[ (position.y - 1) * 10 + (position.x - 1)].isChangeable()
  }

  markSpaceAroundParkOfShip(position) {
    var startX = position.x - 1
    var startY = position.y - 1
    var endX = position.x + 1
    var endY = position.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if( this.cellOnField( new Position(x, y) ) ) this.cells[ (y - 1) * 10 + (x - 1) ].setChangeable(false)
      }
    }
  }
}

module.exports = ShipBuilder