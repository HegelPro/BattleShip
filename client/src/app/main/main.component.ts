import { Component, OnInit } from '@angular/core';
import { BattleShipService } from '../battle-ship.service'
import { log } from 'util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(private battleShipService: BattleShipService) {
  }

  ngOnInit() {
    
  }

  gamerWillTurn() {
    return this.battleShipService.whoWillTurn === "gamer"
  }

  computerWillTurn() {
    return this.battleShipService.whoWillTurn === "computer"
  }
}
