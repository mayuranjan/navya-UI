import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  @Input() text: string;
  @Input() mode: string;
  @Input() isActiveQA: boolean;
  @Output() updatedText = new EventEmitter();

  constructor() {}

  ngOnChanges() {
    if (this.mode !== undefined) {
      switch (this.mode) {
        case 'create':
          break;
        case 'edit':
          break;
        case 'view':
          break;
        case 'response':
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
