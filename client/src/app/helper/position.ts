export class Position {
  constructor(private x:number = 0, private y:number = 0) {
    this.x = x
    this.y = y
  }

  public getСoordinate(coordinate):number {
    return this[coordinate]
  }

  public setСoordinate(coordinate:string, value:number) {
    this[coordinate] = value
  }
}