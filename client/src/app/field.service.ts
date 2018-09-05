import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Cell } from './helper/cell'
import { Position } from './helper/position'
import { log } from 'util';

// Пример 1
import { BattleShipService } from './battle-ship.service'
//

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  cells = []

  constructor(private battleShipService:BattleShipService) {
  }
}

