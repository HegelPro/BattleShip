import { Input, Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player

  constructor() { }

  ngOnInit() {
  }

}
