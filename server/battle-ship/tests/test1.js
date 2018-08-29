const Field = require('../field/field')



var field
for(let i = 1; i <= 100;i++) {
  field = new Field()

  var counter = 0

  field.cells.forEach( cell => {
    // if(!cell.changeable) counter++
    if(cell.hasShip) counter++
  })

  
  if( field.ships[0].parts.length !== 4 ||
    field.ships[1].parts.length !== 3 ||
    field.ships[2].parts.length !== 3 ||
    field.ships[3].parts.length !== 2 ||
    field.ships[4].parts.length !== 2 ||
    field.ships[5].parts.length !== 2 ||
    field.ships[6].parts.length !== 1 ||
    field.ships[7].parts.length !== 1 ||
    field.ships[8].parts.length !== 1 ||
    field.ships[9].parts.length !== 1) {
    throw "lol"
    
    field.ships
  }

  if( field.ships.length !== 10 ) {
    throw "lol"
    
    field.ships
  }

  console.log(counter);
  

  /*
  if(counter < 20 || counter > 20) {
    console.log(counter)
    field.ships
    
    throw "kek"
  }*/
}

console.log("ok");