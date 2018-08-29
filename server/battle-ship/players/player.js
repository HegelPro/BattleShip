const Field = require('../field/field')
const Gun = require('../gun/gun')
const events  = require('events')

class Player {
  constructor() {
    this._emitter = new events.EventEmitter()
    this._field = new Field(this._emitter)
    this._enemyField
  }

  giveTurn(switchPlayer) {
    this._emitter.on('switchPlayer', () => {
      switchPlayer()
    })
  }

  fire(position) {
    this._gun.fire(position)
  }

  getField() {
    return this._field
  }

  getEnemyField() {
    return this._enemyField
  }

  putShips() {
    this._field.putAllShips()
  }

  addEnemy(field) {
    this._gun = new Gun(field, field._emitter)
    this._enemyField = field
  }


}

module.exports = Player