const PlayerFabric = require('./players/player-fabric')

class BattleShipGame {
  constructor() {
    this._status = 'created' // created | waiting | started | finished

    this._playerOne = null
    this._playerTwo = null

    this.whoWillFire = "playerOne"
  }

  getGameStatus() {
    return this._status
  }

  join(newPlayer) {
    if(!this._playerOne) {
      this._playerOne = newPlayer
      this._playerOne.giveTurn( function() {
        this.whoWillFire = (this.whoWillFire === "playerOne") ? "playerTwo": "playerOne"
      }.bind(this) )
      this._status = 'waiting'
    } else if(!this.playerTwo) {
      this._playerTwo = newPlayer
      this._playerTwo.giveTurn( function() {
        this.whoWillFire = (this.whoWillFire === "playerOne") ? "playerTwo": "playerOne"
      }.bind(this) )
      this._start()
    } else throw "Full game"
  }

  _start() {
    this._status = 'started'

    this._playerOne.addEnemy(this._playerTwo.getField())
    this._playerTwo.addEnemy(this._playerOne.getField())
  }
}

module.exports = BattleShipGame