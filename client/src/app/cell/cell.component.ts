import { Input, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { log } from 'util';

import {FireService } from '../fire.service'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() cells
  @Input() ships
  @Input() cellInfo
  @Input() changeable

  constructor(private fireService: FireService) {

  }

  ngOnInit() {
    
  }

  doSomething() {
    if( this.changeable && !this.cellInfo.hasFire) this.fireService.switchPlayer(this.ships, this.cells, this.cellInfo)
  }
}
