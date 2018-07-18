import { Component, OnInit, OnChanges, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnChanges {

  @Input() text: string;
  @Input() mode: string;
  public paragraphAnswer: string = "";
  public updatedParagraphText = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    if (this.mode !== undefined) {
      switch (this.mode) {
        case 'view':

          break;
        case 'edit':
          this.paragraphAnswer = "Long answer text";
          break;
        default:
          break;
      }
    }
  }

  /**
   * updateParagraphText
   */
  public updateParagraphText() {
    this.updatedParagraphText.emit(this.paragraphAnswer);
  }
}
