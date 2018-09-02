const WSConfig = require('../config/ws-server')

const WebSocketServer = require('ws').Server
const EventEmitter = require('events').EventEmitter

const BattleShip = require('../battle-ship/battle-ship')
const Visiter = require('./players/visiter')
const Bot = require('./players/bot')

class WSServet {
  constructor() {
    this._wss = new WebSocketServer(WSConfig)

    this._wssEmitter = new EventEmitter()
    this._setEvents()

    this.players = new Map()
    this.games = new Map()
  }

  addConnaction() {
    this._wss.on('connection', ws => {
      console.log('user+') // can delete
      this._addVisiter(ws)
    })
  }

  _addVisiter(ws) {
    var key = this._generateKey()
    return this.players
            .set(key, new Visiter(ws, key, this._wssEmitter))
            .get(key)
  }

  _addBot(enemyField) {
    var key = this._generateKey()
    return this.players
            .set(key, new Bot(enemyField))
            .get(key)
  }

  _generateKey() {
    var key

    do {
      key = Math.random()
    } while ( this.players.has(key) )
    
    return key
  }

  _setEvents() {
    this._wssEmitter.on('playVsBot', this._playVsBotListener.bind(this))
    // this._wssEmitter.on('playVsPlayer', this._playVsPlayerListener)
    // this._wssEmitter.on('disconnect', this.disconnectListener)
    // this._wssEmitter.on('error', this._errorListener)
  }

  _playVsBotListener( key ) {
    var visiter = this.players.get(key)

    var battleShip = new BattleShip(visiter, this._addBot( visiter._field ), "playerVsBot" )
  }

  _addBattleShip(battleShip) {
    var key = this._generateKey()
    return this.games
            .set(key, battleShip)
            .get(key)
  }

  _playVsPlayerListener() {
    /* ... */
  }
}

module.exports = WSServet