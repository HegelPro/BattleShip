import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { log } from 'util';


@Injectable({
  providedIn: 'root',
})
export class BattleShipService {
  whoWillTurn:string = "gamer"

  constructor() {
    console.log('BattleShipService::construct')
  }

  switchPlayer() {
    this.whoWillTurn = (this.whoWillTurn === "gamer") ? "computer": "gamer";
  }
}
