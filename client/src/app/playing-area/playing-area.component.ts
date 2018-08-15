import { Input, Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-playing-area',
  templateUrl: './playing-area.component.html',
  styleUrls: ['./playing-area.component.scss']
})
export class PlayingAreaComponent implements OnInit {
  @Input() player:string
  
  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }

}
