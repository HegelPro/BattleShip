import { Injectable } from '@angular/core';

import { Cell } from './helper/cell'

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private cellsComputer:Array<Cell> = []
  private cellsGamer:Array<Cell> = []

  constructor() { 
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        this.cellsComputer.push(new Cell(j, i))
        this.cellsGamer.push(new Cell(j, i))
      }
    }

    var shipLenght = 4
    const SHIPS_AMOUNT = 10
    var shipDiraction = null
    var random
    var startPoint

    for(var shipIndex = 1; shipIndex <= SHIPS_AMOUNT;) {
      random = Math.random()

      if( random < 0.25 ) shipDiraction = "left"
      else if ( random < 0.5 ) shipDiraction = "right"
      else if ( random < 0.75 ) shipDiraction = "top"
      else shipDiraction = "bottom"

      if( shipDiraction ===  "left" && canPutShip(shipIndex, shipLenght, shipDiraction) ) {

      } else if ( shipDiraction === "right" && canPutShip(shipIndex, shipLenght, shipDiraction) ) {

      } else if( shipDiraction ===  "top" && canPutShip(shipIndex, shipLenght, shipDiraction) ) {

      } else if ( shipDiraction === "bottom" && canPutShip(shipIndex, shipLenght, shipDiraction) ) {

      }
    }

   }
}

function canPutShip(shipIndex, shipLenght, shipDiraction) {
  if (shipDiraction === "top") {
    
  } else if (shipDiraction === "right") {

  } else if ( shipDiraction === "top" ) {

  } else ( shipDiraction === "bottom" ) {

  }

}
