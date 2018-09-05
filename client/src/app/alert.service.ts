import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  needAlert = false
  message = ''

  constructor() {}

  show(isWin) {
    this.needAlert = true

    this.message = isWin ? "Congratulations! You Win!": 'You Lose.'
  }
}
