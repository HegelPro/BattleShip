class shipBuilder {
  constructor() {
    
  }

  isValidStep(nextStep) {
    if( nextStep.x >= 1 && nextStep.x <= 10 && nextStep.y >= 1 && nextStep.y <= 10 && this.canHaveShip(nextStep) ) return true
    else return false
  }

  canBuildShip(position) {
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