const BattleShip = require('../battle-ship')

const battleShip = new BattleShip()

battleShip.createGame()

var game = battleShip._games[0]
game.join('computer')
game.join('computer')

var playerOne = game._players[0]
var playerTwo = game._players[1]

playerOne.fire()
playerTwo.fire()

function log() {
  console.log('PlayerOne');
  playerOne._field.log()
  console.log('PlayerTwo');
  playerTwo._field.log()
}