const Computer = require('../../battle-ship/players/computer')

class Bot extends Computer {
  constructor(enemyField) {
    super()

    // this._key = key

    this._gameEmitter
  
    this._canFire

    this._enemyField = enemyField
  }

  set canFire(canFire) {
    this._canFire = canFire

    if(canFire) 
      this.startFire()
  }

  get canFire() {
    return this._canFire
  }

  startFire() {
    if( this._canFire ) {
      this._gameEmitter.emit('fire', this, this._autoFire.fire( this._enemyField ))
      
      this.startFire()
    } else
      this._gameEmitter.emit('botHasStoppedFire', null)
  }

  setGameEmitter(gameEmitter) {
    this._gameEmitter = gameEmitter
  }

  _switchPlayer() {
    this._gameEmitter.emit('switchPlayer', this)
  }
}

module.exports = Bot