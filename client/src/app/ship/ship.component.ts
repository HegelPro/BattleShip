import { Input, Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  @Input() shipInfo

  constructor() { }

  ngOnInit() {
    
  }

  partToNumber(part) {
    return (part.hasFire) ? 0 : 1;
  }

}
