import { Output,  Input, Component, OnInit } from '@angular/core'
import { log } from 'util'

import { FieldService } from '../field.service'

//
import { BattleShipService } from '../battle-ship.service'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() player

  constructor(private fieldService: FieldService, private battleShipService:BattleShipService) { }

  ngOnInit() {
    this.fieldService.postData()

    // // Пример 1
    // console.log(this.battleShipService)    
    // console.log(this.battleShipService.ships)
    // console.log(this.battleShipService.cells)    
    //
  }
}
