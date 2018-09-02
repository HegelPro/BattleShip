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

    // this.websocketService.send('get')
  }

  /*switchPlayer(ships, cells, cell) {
    cell.hasFire = true
    
    if(!cell.hasShip) {
      this.battleShipService.switchPlayer()
    } else {
      this.shipTNT(ships,cells, cell)
    }
  }

  shipTNT(ships, cells, cell) {
    var needentShip

    ships.forEach( ship => {
      ship.forEach( part => {
        if(part.x === cell.x && part.y === cell.y) {
          needentShip = ship
        }
      })
    })

    var willTNT = needentShip.every( part => {
      return part.hasFire
    })

    if(willTNT) {
      needentShip.forEach( part => {
        this.fireSpaceAroundParkOfShip(cells, part)
      })
      
    }
  }

  cellOnField(cell) {
    return cell.x >= 1 && cell.x <= 10 && cell.y >= 1 && cell.y <= 10
  }

  fireSpaceAroundParkOfShip(cells, cell) {
    var startX = cell.x - 1
    var startY = cell.y - 1
    var endX = cell.x + 1
    var endY = cell.y + 1

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if( this.cellOnField( {x, y} ) ) cells[ (y - 1) * 10 + (x - 1) ].hasFire = true
      }
    }
  }*/
}
