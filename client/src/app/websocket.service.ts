import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws:WebSocket = new WebSocket("ws://93.171.10.54:5002")
  events = {}

  constructor() {
  }

  on(event, func) {
    this.events[event] = func
    var events = this.events

    this.ws.onmessage = function(e) {
      const data = JSON.parse(e.data);

      for (const key in events) {
        if(data.event === key) events[key](data.data)
      }
    }.bind(this.ws)
  }

  send(event, object) {
    var output = Object.assign({event}, {data: object})
    this.ws.send( JSON.stringify( output ) )
  }
}
