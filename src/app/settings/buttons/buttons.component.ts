import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() selectedAnswerTypeValue = 'Paragraph';
  @Input() isRequiredValue = false;

  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() selectedAnswerType = new EventEmitter();
  @Output() isRequired = new EventEmitter();

  public answerTypes: Array<string> = new Array<string>();

  constructor() {
    this.answerTypes.push('Paragraph');
    this.answerTypes.push('Multiple Choice');
  }

  ngOnInit() {}

  /**
   * addQuestion
   */
  public addQuestion() {
    this.add.emit();
  }

  /**
   * removeQuestion
   */
  public removeQuestion() {
    this.remove.emit();
  }

  /**
   * setAnswerType
   */
  public setAnswerType(answerType: string) {
    this.selectedAnswerType.emit(answerType);
    this.selectedAnswerTypeValue = answerType;
  }

  /**
   * setIsRequired
   */
  public setIsRequired() {
    this.isRequired.emit(this.isRequiredValue);
  }
}
