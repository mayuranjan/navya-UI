import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnChanges {

  @Input() mode: string;

  constructor() { }

  ngOnChanges() {
    if (this.mode != undefined) {
      switch (this.mode) {
        case 'view':

          break;
        case 'edit':

          break;
        default:
          break;
      }
    }
  }

}
