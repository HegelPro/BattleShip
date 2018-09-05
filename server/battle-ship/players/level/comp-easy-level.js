const { generateRandomNumber } = require('../../helper')

class CompEasyLevel {
  fire(field) {
    var avaibleCells = field._cells.filter( cell => !cell.hasFire )

    return avaibleCells[ generateRandomNumber(avaibleCells.length) - 1 ]
  }
}

module.exports = CompEasyLevel