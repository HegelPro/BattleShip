import { Position } from './position'

export class Cell extends Position {
  private position:Position
  private hasShip:boolean = false
  private hasFire:boolean = false
  private changeable:boolean = true

  constructor(x?:number, y?:number, params?:object) {
    super(x, y)

    if(params !== undefined) {
      for (let param in params) {
        this[param] = params[param]
      } 
    } 
  }

  putShip() {
    this.hasShip = true
  }

  fire() {
    this.hasFire = true
  }

  setChangeable(bool:boolean):void {
    this.changeable = bool
  }

  public getHasShip() {
    return this.hasShip
  }

  public isChangeable() {
    return this.changeable
  }
}