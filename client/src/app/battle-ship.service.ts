import { EventEmitter, Injectable } from '@angular/core';

import { log } from 'util';

import { WebsocketService } from './websocket.service'

@Injectable({
  providedIn: 'root',
})
export class BattleShipService {
  whoWillTurn:string = "me"
  myField = {
    _cells: []
  }
  enemyField = {
    _cells: []
  }

  constructor(private wsService: WebsocketService) {
    console.log('BattleShipService::construct')
    var that = this

    wsService.on('getMyField', function(data) {
      that.setMyField(data.field)
    })

    wsService.on('getEnemyField', function(data) {
      that.setEnemyField(data.field)
    })

    setTimeout( that.startConfig.bind(this), 1000)
  }

  startConfig() {
    this.ganirateField()
    this.startGame()
  }

  setMyField(field) {
    this.myField._cells = Object.assign(this.myField._cells, field._cells)
  }

  setEnemyField(field) {
    this.enemyField._cells = Object.assign(this.enemyField._cells, field._cells)
  }

  switchPlayer() {
    this.whoWillTurn = (this.whoWillTurn === "me") ? "enemy": "me";
  }

  ganirateField() {
    this.wsService.send('ganirateField', null)
  }

  startGame() {
    this.wsService.send('start', null)
  }

  serverFire() {
    this.wsService.send('serverFire', {
      myField: this.myField
    })
  }
  
  logField() {
    console.log(this.myField);
  }
}
