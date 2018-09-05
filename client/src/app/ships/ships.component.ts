import { Component, OnInit, Input } from '@angular/core';

import { BattleShipService } from '../battle-ship.service'

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  @Input() player
  private ships

  constructor(private battleShipService: BattleShipService) {  }

  ngOnInit() {
    this.ships = (this.player === 'me') ? this.battleShipService.myField.ships: this.battleShipService.enemyField.ships
  }
}
