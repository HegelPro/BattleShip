import { Input, Component, OnInit } from '@angular/core'
import { log } from 'util'

// import { Position } from '../helper/position'
import { FieldService } from '../field.service'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [FieldService]
})
export class FieldComponent implements OnInit {
  @Input() changeable: boolean

  constructor(private dataService: FieldService) { }

  ngOnInit() {

    console.log(this.dataService);
    
  }
}
