import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() text: string;
  @Output() updatedText = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  /**
   * updateText
   */
  public updateText() {
    this.updatedText.emit(this.text);
  }

}