const Player = require("./player")
const CompEasyLevel = require('../level/comp-easy-level')
const CompExpertLevel = require('../level/comp-expert-level')
const CompMediumLevel = require('../level/comp-medium-level')

class Computer extends Player {
  constructor() {
    super()
    
    this._levelToClassLevel = {
      easy: CompEasyLevel,
      medium: CompExpertLevel,
      expert: CompMediumLevel
    }

    this.setLevel('easy')
  }

  giveTurn(switchPlayer) {
    this._emitter.on('switchPlayer', () => {
      switchPlayer()
      this.fire()
    })
  }

  setLevel(level) {
    this._autoFire = new this._levelToClassLevel[level]
  }

  fire() {
    this._autoFire.fire(this._enemyField)
  }
}

module.exports = Computer