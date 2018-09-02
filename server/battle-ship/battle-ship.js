const EventEmitter = require('events').EventEmitter

class BattleShip {
  constructor(_playerOne, _playerTwo, type) {
    this.type = type

    this._playerOne = _playerOne
    this._playerTwo = _playerTwo

    this._gameEmitter = new EventEmitter()
    this._addEvents()

    this._playerOne.setGameEmitter(this._gameEmitter)
    this._playerTwo.setGameEmitter(this._gameEmitter)

    this.whoWillFire = "playerOne"
    this._playerOne.canFire = true
    this._playerTwo.canFire = false
  }

  _addEvents() {
    this._gameEmitter.on('switchPlayer', this._switchPlayer.bind(this) )
    this._gameEmitter.on('getEnemyField', this._getEnemyField.bind(this) ) // this._gameEmitter.on('getEnemyField', this._getEnemyField.bind(this) )
    this._gameEmitter.on('fire', this._fire.bind(this) )
    // this._gameEmitter.on('end', this._endGame.bind(this) )
    this._gameEmitter.on('botHasStoppedFire', this._sendField.bind(this) )  //  TODO для игры с ботом
  }

  _sendField() {  // TODO для игры с ботом
    this._playerOne._ws.send(JSON.stringify({
      event: 'getMyField',
      data:{field: this._playerOne.getField()}
    }))
  }
 
  _fire(player, position) {
    if( !player.canFire ) {
      console.log(" you can't fire ")
    }
    else if( player === this._playerOne)
      this._playerTwo.getFire(position)
    else if( player === this._playerTwo)
      this._playerOne.getFire(position)
    else 
      throw "can't fire"
  }

  _getEnemyField(player) {
    if(player === this._playerOne)
      player.send('getEnemyField', { field: this._playerTwo.getFieldHidden() })
    else if(player === this._playerTwo)
      player.send('getEnemyField', { field: this._playerOne.getFieldHidden() })
    else
      throw "player not exist in the game"
  }

  _switchPlayer() {
    if(this.whoWillFire === "playerOne") {
      this.whoWillFire = "playerTwo"
      this._playerOne.canFire = false
      this._playerTwo.canFire = true
    } else {
      this.whoWillFire = "playerOne"
      this._playerOne.canFire = true
      this._playerTwo.canFire = false
    }
  }
}

module.exports = BattleShip