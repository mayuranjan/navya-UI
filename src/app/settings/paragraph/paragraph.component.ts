import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnChanges {

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
