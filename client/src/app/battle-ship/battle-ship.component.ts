import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BattleShipService } from '../battle-ship.service'
// import { WebsocketService } from '../websocket';
// import { WS } from '../websocket.events';

export interface IMessage {
    id: number;
    text: string;
}


@Component({
  selector: 'app-battle-ship',
  templateUrl: './battle-ship.component.html',
  styleUrls: ['./battle-ship.component.scss']
})
export class BattleShipComponent implements OnInit {
  constructor(private  battleShipService: BattleShipService) { }

  ngOnInit() {
  }

  public sendText(): void {
    
  }

  public fire(): void {
    
  }

  public removeText(index: number): void {
    
  }
}
