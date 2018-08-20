import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Cell } from './helper/cell'
import { Position } from './helper/position'
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  constructor(private http: HttpClient) {

  }

  postData(){
    const body = {}
    this.http.post('http://localhost:5000/api/field/', body)
      .subscribe(
        (data) => {
          this.cells = data.field.cells
          this.ships = this.chaneShipsToCells(data.field)
          this.key = data.key
        },
        error => console.log(error)
      )
  }

  chaneShipsToCells(field) {
    var newShips = []
    
    field.ships.forEach( ship => {
      newShips.push([])

      ship.forEach( part => {
        newShips[newShips.length - 1].push( field.cells[ (part.y - 1) * 10 + (part.x - 1 )] )
      })
    })

    return newShips
  }
}

