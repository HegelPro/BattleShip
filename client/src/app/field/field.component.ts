import { Input, Component, OnInit } from '@angular/core';

import { Position } from '../helper/position'
import { log } from 'util';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() changeable: boolean
  private cells:Array<Position> = []

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        this.cells.push(new Position(j, i))
      }
    }
  }
}
