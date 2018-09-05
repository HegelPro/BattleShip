import { EventEmitter, Injectable } from '@angular/core';

import { log } from 'util';

import { WebsocketService } from './websocket.service'
import { AlertService } from './alert.service'

@Injectable({
  providedIn: 'root',
})
export class BattleShipService {
  whoWillTurn:string = "me"
  myField = {
    cells: [],
    ships: []
  }
  enemyField = {
    cells: [],
    ships: []
  }
  bot = {level: 'easy'} 

  constructor(private wsService: WebsocketService, private alert: AlertService) {
    var that = this

    wsService.on('getMyField', function(data) {
      that.setMyField(data.field)
    })

    wsService.on('getEnemyField', function(data) {
      that.setEnemyField(data.field)
    })

    wsService.on('endGame', data => {  // TODO оформить
      this.whoWillTurn = "enemy"
      alert.show(data.isWin)
    })

    wsService.on('switchLevel', data => {  // TODO оформить
      this.bot = Object.assign(this.bot, data)     
    })

    setTimeout( that.startConfig.bind(this), 1)
  }

  startConfig() {
    this.whoWillTurn = "me"
    this.ganirateField()
    this.startGame()
  }

  setMyField(field) {
    this.myField.cells = Object.assign(this.myField.cells, field._cells)
    this.myField.ships = Object.assign(this.myField.ships, field.ships)
  }

  setEnemyField(field) {
    this.enemyField.cells = Object.assign(this.enemyField.cells, field._cells)
    this.enemyField.ships = Object.assign(this.enemyField.ships, field.ships)
  }

  switchPlayer() {
    this.whoWillTurn = (this.whoWillTurn === "me") ? "enemy": "me";
  }

  switchLevel() {
    this.wsService.send('switchLevel', null)
  }

  ganirateField() {
    this.wsService.send('ganirateField', null)
  }

  startGame() {
    this.wsService.send('playVsBot', null)
  }

  restartGame() {
    this.startConfig()
  }

  serverFire() {
    this.wsService.send('serverFire', {
      myField: this.myField
    })
  }
}
