export class Position {
  constructor(public x:number = 0, public y:number = 0) {
    this.x = x
    this.y = y
  }

  public setPosition(pos: Position) {
    this.x = pos.x
    this.y = pos.y
  }

  public getСoordinate(coordinate):number {
    return this[coordinate]
  }

  public setСoordinate(coordinate:string, value:number) {
    this[coordinate] = value
  }

  static equal(pos1:Position, pos2:Position):boolean {
    return (pos1.x === pos2.x && pos1.y === pos2.y) ? true : false;
  }

  public increment(coordinate) {
    this[coordinate]++
  }

  public decrement(coordinate) {
    this[coordinate]--
  }
}