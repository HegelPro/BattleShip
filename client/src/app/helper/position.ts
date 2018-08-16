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

  static equal(pos1:Position, pos2:Position):boolean {
    return (pos1.x === pos2.x && pos1.y === pos2.y) ? true : false;
  }
}