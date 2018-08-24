function generateRandomNumber(maxNumber) {
  return Math.ceil( Math.random() * maxNumber )
}
module.exports.generateRandomNumber = generateRandomNumber

function generateOrderDirection() {
  var directions = ["top", "bottom", "right", "left"]
  var orderDirections = []

  while(directions.length > 0) {
    var random = generateRandomNumber(directions.length)

    orderDirections.push( directions.splice(random - 1, 1)[0] ) 
  }

  return orderDirections
}
module.exports.generateOrderDirection = generateOrderDirection
