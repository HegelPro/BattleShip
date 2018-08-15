import { Input, Component, OnInit } from '@angular/core';

import { Position } from '../helper/position'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() position:Position
  private x:number
  private y:number

  constructor() { }

  ngOnInit() {
    this.x = this.position.getСoordinate('x')
    this.y = this.position.getСoordinate('y')
  }

}
