import { Injectable } from '@angular/core';
import { log } from 'util';
import { BattleShipService } from './battle-ship.service'
// import { FieldService } from './field.service'
import { WebsocketService } from './websocket.service'
import { Position } from './helper/position'


@Injectable({
  providedIn: 'root'
})
export class FireService {
  constructor(private websocketService:WebsocketService) {
  }

  fire(cell) {
    this.websocketService.send('fire', {
      position: new Position(cell.x, cell.y)
    })
  }
}
