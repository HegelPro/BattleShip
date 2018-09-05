import { Component, OnInit } from '@angular/core';
import { BattleShipService } from '../battle-ship.service'

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  constructor(private  battleShipService: BattleShipService) { }

  ngOnInit() {
  }
}
