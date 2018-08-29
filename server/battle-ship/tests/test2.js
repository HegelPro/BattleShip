const ShipBuilder = require('../ship/ship-builder')
const shipBuilder = new ShipBuilder()
const Field = require('../field/field')
const field = new Field()

shipBuilder.buildShip(9, field.getAvaiblePositions())

shipBuilder.getShip().parts.forEach( part => {
  field.cells[ (part.y - 1) * field.MAX_Y + (part.x - 1) ].putShip()
})

field.log()