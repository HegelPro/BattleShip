const Player = require("./player")

class Gamer extends Player {
  giveTurn(switchPlayer) {
    this._emitter.on('switchPlayer', () => {
      switchPlayer()
    })
  }
}

module.exports = Gamer