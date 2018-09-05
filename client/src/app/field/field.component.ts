import { Output,  Input, Component, OnInit } from '@angular/core'
import { log } from 'util'

import { BattleShipService } from '../battle-ship.service'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() player
  cells = []

  constructor(private battleShipService: BattleShipService) { }

  ngOnInit() {
    this.cells = (this.player === 'me') ? this.battleShipService.myField.cells: this.battleShipService.enemyField.cells
  }
}
