import { Input, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { log } from 'util';

import {FireService } from '../fire.service'
import { Position } from '../helper/position'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() cellInfo
  @Input() changeable

  constructor(private fireService: FireService) {

  }

  ngOnInit() {
    
  }

  fire() {
    if(this.changeable && !this.cellInfo.hasFire) this.fireService.fire(new Position(this.cellInfo.x, this.cellInfo.y))
  }
}
