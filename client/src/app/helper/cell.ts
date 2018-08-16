import { Position } from './position'

export class Cell extends Position {
  private position:Position
  private hasShip:boolean = false
  private hasFire:boolean = false

  constructor(x:number, y:number) {
    super(x, y)
  }
}