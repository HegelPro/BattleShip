import { Component, OnInit } from '@angular/core';

import { AlertService } from '../alert.service'
import { BattleShipService } from '../battle-ship.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private alert: AlertService, private battleShipService:BattleShipService) { }

  ngOnInit() {
  }

  close() {
    this.alert.needAlert = false
  }

  restart() {
    this.close()
    this.battleShipService.restartGame()
  }
}
