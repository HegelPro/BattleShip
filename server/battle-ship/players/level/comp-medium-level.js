const { generateRandomNumber } = require('../../helper')

class CompMediumLevel {
  constructor() {
    this.savePosition = null
    
    this._avaibleCells = null
  }

  fire(field) {
    this._avaibleCells = field._cells.filter( cell => !cell.hasFire )
    
    if(this.savePosition)
      this.savePosition = this._avaibleCells.find( cell =>  this.isValidStep(this.savePosition.x + 2, this.savePosition.y) && cell.x === this.savePosition.x + 2 && cell.y === this.savePosition.y ||
                                                            this.isValidStep(this.savePosition.x - 2, this.savePosition.y) && cell.x === this.savePosition.x - 2 && cell.y === this.savePosition.y ||
                                                            this.isValidStep(this.savePosition.x, this.savePosition.y + 2) && cell.x === this.savePosition.x && cell.y === this.savePosition.y + 2 ||
                                                            this.isValidStep(this.savePosition.x, this.savePosition.y - 2) && cell.x === this.savePosition.x && cell.y === this.savePosition.y - 2 )
    
    if( this.savePosition ) 
      return this.savePosition
    else {
      this.savePosition = this._avaibleCells[ generateRandomNumber(this._avaibleCells.length) - 1 ]
      return this.savePosition
    }
  }

  isValidStep(x, y) {
    for (let index = 0; index < this._avaibleCells.length; index++) {
      if(this._avaibleCells[index].x === x && this._avaibleCells[index].y === y) 
      return true
    }

    return false
  }
}

module.exports = CompMediumLevel