const Position = require('../field/position')
const { generateRandomNumber, generateOrderDirection } = require('../helper')

class Builder {
  constructor(ship, avaiblePositions) {
    this._availablePositions = avaiblePositions.slice()
    this._currentPosition = new Position()
    this.selectStartPosition()
    this._ship = ship
  }
  
  buildNewPart() {
    var savePosition = this.saveCurrentPosition()
    var orderDirections = generateOrderDirection()

    while(true) {
      var randomDirection = orderDirections.splice(0, 1)[0]
      this.tryToBuildNewPart(randomDirection)

      if( this.isValidStep() ) {
        this.makeCurrentPositionNotAvailable()
        this._ship.buildNewPart(this._currentPosition)
        return
      } else if(orderDirections.length === 0) {
        throw "builder couldn't find diraction."
      } else {
        this._currentPosition.setPosition(savePosition)
      }
    }
  }

  saveCurrentPosition() {
    return new Position(this._currentPosition.x, this._currentPosition.y)
  }

  selectStartPosition() {
    this._currentPosition.setPosition( this._availablePositions[ generateRandomNumber(this._availablePositions.length) - 1] )
  }

  makeCurrentPositionNotAvailable() {
    var needDelete = this._availablePositions.find( pos => pos.x === this._currentPosition.x && pos.y  === this._currentPosition.y)
    this._availablePositions.splice( this._availablePositions.indexOf(needDelete), 1 )
  }

  deleteNotAvaildePositionsFrom(avaiblePositions) {
    avaiblePositions = this._availablePositions
  }

  tryToBuildNewPart(direction) {
    switch (direction) {
      case "top":
        this._currentPosition.y++
        break;
      case "right":
        this._currentPosition.x++
        break;
      case "bottom":
        this._currentPosition.y--
        break;
      case "left":
        this._currentPosition.x--
        break;
    }
  }

  isValidStep() {
    for (let index = 0; index < this._availablePositions.length; index++) {
      if(this._availablePositions[index].x === this._currentPosition.x && this._availablePositions[index].y === this._currentPosition.y) return true
    }
    return false
  }
}

module.exports = Builder