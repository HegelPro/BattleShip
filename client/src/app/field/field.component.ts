import { Output,  Input, Component, OnInit } from '@angular/core'
import { log } from 'util'

import { FieldService } from '../field.service'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [FieldService]
})
export class FieldComponent implements OnInit {
  @Input() player

  constructor(private fieldService: FieldService) { }

  ngOnInit() {
    this.fieldService.postData()    
  }
}
