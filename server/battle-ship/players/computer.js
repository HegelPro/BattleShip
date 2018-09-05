const computerCongig = require('../../config/computer.json')

const Player = require("./player")
const CompEasyLevel = require('./level/comp-easy-level')
const CompMediumLevel = require('./level/comp-medium-level')
const CompExpertLevel = require('./level/comp-expert-level')

class Computer extends Player {
  constructor() {
    super()

    this.putShips()

    this.level = computerCongig.level

    this._levelToClassLevel = {
      easy: CompEasyLevel,
      medium: CompMediumLevel,
      expert: CompExpertLevel
    }
    this.setLevel(this.level)
  }

  setLevel(level) {
    this._autoFire = new this._levelToClassLevel[level]() 
  }

  switchLevel() {
    if(this.level === 'easy') this.level = 'medium'
    else if(this.level === 'medium') this.level = 'expert'
    else if(this.level === 'expert') this.level = 'easy'
    else throw "Level didn't switch"
    
    this.setLevel(this.level)
  }
}

module.exports = Computer