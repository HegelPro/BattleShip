const BattleShipGame = require('./battle-ship-games')

class BattleShip {
  constructor() {
    this._games = []
  }

  createGame() {
    this._games.push( new BattleShipGame() )
  }
}

module.exports = BattleShip