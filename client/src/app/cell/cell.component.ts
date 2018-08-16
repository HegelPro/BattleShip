import { Input, Component, OnInit } from '@angular/core';
import { log } from 'util';

// import { Position } from '../helper/position'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() private cellInfo

  constructor() { }

  ngOnInit() {
    console.log(this.cellInfo)
  }

}
