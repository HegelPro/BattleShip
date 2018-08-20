const Field = require('./field/field')



var field
for(let i = 1; i <= 100;i++) {
  field = new Field()

  var counter = 0

  field.cells.forEach( cell => {
    if(!cell.changeable) counter++
  })

  
  if( field.ships[0].length !== 4 ||
    field.ships[1].length !== 3 ||
    field.ships[2].length !== 3 ||
    field.ships[3].length !== 2 ||
    field.ships[4].length !== 2 ||
    field.ships[5].length !== 2 ||
    field.ships[6].length !== 1 ||
    field.ships[7].length !== 1 ||
    field.ships[8].length !== 1 ||
    field.ships[9].length !== 1) {
      throw "lol"
      
      field.ships
    }


  
  /*
  if(counter < 20 || counter > 20) {
    console.log(counter)
    field.ships
    
    throw "kek"
  }*/
}

console.log("lol");


// module.exports = BattleShip


