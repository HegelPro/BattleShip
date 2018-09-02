const Gamer = require('../../battle-ship/players/gamer')

class Visiter extends Gamer {
  constructor(ws, key, wssEmitter) {
    super()

    this._ws = ws
    this._setWSCatcherEvents()

    this._key = key

    this._wssEmitter = wssEmitter
    this._gameEmitter
  }

  _setWSCatcherEvents() {
    this._ws.on('message', event => {
      const data = JSON.parse(event)
  
      switch (data.event) {
        case 'ganirateField':
          this.putShips()
  
          this._ws.send(JSON.stringify({
            event: 'getMyField',
            data:{field: this.getField()}
          }))
          break;
        case 'connect':
          
          break;
        case 'playVsBot':
          this._wssEmitter.emit('playVsBot', this._key)
          this._gameEmitter.emit('getEnemyField', this)
          break;
        case 'fire':
          this._gameEmitter.emit('fire', this, data.data.position)
          this._gameEmitter.emit('getEnemyField', this)
          break;
       }
    })

    this._ws.on('close', () => console.log('-user'))
  }

  send(event, data) {
    this._ws.send( JSON.stringify({
      event,
      data      
    }) )
  }

  setGameEmitter(gameEmitter) {
    this._gameEmitter = gameEmitter
  }

  _switchPlayer() {
    this._gameEmitter.emit('switchPlayer', this)
  }
}

module.exports = Visiter