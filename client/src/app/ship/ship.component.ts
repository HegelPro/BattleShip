import { Input, Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  @Input() shipInfo

  private length

  constructor() { }

  ngOnInit() {
    this.length = new Array(this.shipInfo.length)
  }

  
}
