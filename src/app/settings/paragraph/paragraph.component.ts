import {
  Component,
  OnChanges,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnChanges {
  @Input() text: string;
  @Input() mode: string;
  @Input() isActiveQA: boolean;
  @Output() updatedParagraphText = new EventEmitter();

  public paragraphAnswer: string;

  constructor() {}

  ngOnChanges() {
    if (this.mode !== undefined) {
      switch (this.mode) {
        case 'create':
          break;
        case 'edit':
          this.paragraphAnswer = 'Long answer text';
          break;
        case 'view':
          break;
        case 'response':
          if (this.text !== undefined) {
            this.paragraphAnswer = this.text;
          }
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
