import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnChanges {

  @Input() text: string;
  @Input() mode: string;
  @Output() updatedText = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    if (this.mode !== undefined) {
      switch (this.mode) {
        case 'view':

          break;
        case 'edit':
          this.text = 'Long-answer text';
          break;
        default:
          break;
      }
    }
  }

  /**
   * updateText
   */
  public updateText() {
    this.updatedText.emit(this.text);
  }

}
