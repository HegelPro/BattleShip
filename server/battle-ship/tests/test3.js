const Field = require('../field/field')

try {
  for (let index = 0; index < 100; index++) {
    field = new Field()
    field.putAllShips()
  
    field.ships.forEach( shipOne => {
      shipOne.parts.forEach( partOne => {
        field.ships.forEach( shipTwo => {
          shipTwo.parts.forEach( partTwo => {
            if (shipOne !== shipTwo && partOne.x === partTwo.x && partOne.y === partTwo.y) {
              throw "lolololo"
            }
          })
        })
      })
    })
  }
  console.log("OK");

  field.log()
  field.ships
} catch (error) {
  console.log("IS NOT OKEY");
}
