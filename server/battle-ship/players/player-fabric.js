const Gamer = require('./gamer')
const Computer = require('./computer')

class PlayerFabric {
  static get _typeOfPlayerToPlayerClass() {
    return {
      gamer: Gamer,
      computer: Computer
    }
  }
  
  static createPlayer(typeOfPlayer) {
    return new this._typeOfPlayerToPlayerClass[typeOfPlayer]()
  }
}

module.exports = PlayerFabric