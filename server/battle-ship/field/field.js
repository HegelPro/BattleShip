const Cell = require('./cell')
const { generateRandomNumber } = require('../helper')

class Field {
  constructor() {
    this.cells = []
    this.ships = []

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

    for (let currentShip = 1; currentShip <= SHIPS_AMOUNT; currentShip++) {
      
      try {
        this.putShip(lenghtOfCurrentShip)

        if(currentShip === 1) lenghtOfCurrentShip--
        if(currentShip === 3) lenghtOfCurrentShip--
        if(currentShip === 6) lenghtOfCurrentShip--
      } catch (e) {
        console.error(e);
        
        currentShip--
      }
    }
  }

  putShip(shipLenght) {
    var avaibleCells = this.cells.filter( cell => {
      return cell.isChangeable
    })
    var currentCell = new Cell()
    currentCell.setPosition( avaibleCells[ generateRandomNumber(avaibleCells.length) - 1] )

    var trackCells = []

    try {
      for (let shipSection = 1; shipSection <= shipLenght; shipSection++) {
        currentCell.setPosition( this.doStep(currentCell) )
        trackCells.push(new Cell(currentCell.x, currentCell.y))
        this.cells[ (currentCell.y - 1) * 10 + (currentCell.x - 1) ].setChangeable(false)
      }

      trackCells.forEach( elem => { 
        // this.cells[ (elem.y - 1) * 10 + (elem.x - 1) ].setChangeable(false)

        this.markSpaceAroundParkOfShip(elem)
        
        this.cells[ (elem.y - 1) * 10 + (elem.x - 1) ].putShip()


      })

      this.ships.push(trackCells) // TODO Для проверки
    } catch (e) {
      console.error(e);

      trackCells.forEach( elem => this.cells[ (elem.y - 1) * 10 + (elem.x - 1) ].setChangeable(true) )
    
      throw "ship didn't put"
    }
  }

  markSpaceAroundParkOfShip(cell) {
    var startX = cell.x - 1
    var startY = cell.y - 1
    var endX = cell.x + 1
    var endY = cell.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if( this.cellOnField( new Cell(x, y) ) ) this.cells[ (y - 1) * 10 + (x - 1) ].setChangeable(false)
      }
    }
  }

  doStep(currentCell) {
    var nextCell = new Cell( currentCell.x, currentCell.y )
    var orderDirections = this.generateOrderDirection()

    while(true) {
      var randomDirection = orderDirections.splice(0, 1)[0]

      this.tryDoStep(nextCell, randomDirection)

      if(this.isValidStep(nextCell)) {
        return nextCell
      } else if(orderDirections.length === 0) {
        throw "Haven't directions"
      } else {
        nextCell.setPosition(currentCell)
      }
    }
  }

  tryDoStep(currentCell, direction) {
    switch (direction) {
      case "top":
        currentCell.y++
        break;
      case "right":
        currentCell.x++
        break;
      case "bottom":
        currentCell.y--
        break;
      case "left":
        currentCell.x--
        break;
    }
  }

  cellOnField(cell) {
    return cell.x >= 1 && cell.x <= 10 && cell.y >= 1 && cell.y <= 10
  }

  isValidStep(nextStep) {
    if( this.cellOnField(nextStep) && this.canHaveShip(nextStep) ) return true
    else return false
  }

  canHaveShip(position) {
    return this.cells[ (position.y - 1) * 10 + (position.x - 1)].isChangeable()
  }

  generateOrderDirection() {
    var directions = ["top", "bottom", "right", "left"]
    var orderDirections = []

    while(directions.length > 0) {
      var random = generateRandomNumber(directions.length)

      orderDirections.push( directions.splice(random - 1, 1)[0] ) 
    }

    return orderDirections
  }
}

module.exports = Field