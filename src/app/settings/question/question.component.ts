import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() text: string;
  @Output() updatedText = new EventEmitter();

  @ViewChild('question') question: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  /**
   * onFocus
   */
  public onFocus() {
    setTimeout(() => {
      console.log(this.question);
      this.question.nativeElement.select();
    }, 50);
  }

  /**
   * updateText
   */
  public updateText() {
    this.updatedText.emit(this.text);
  }

}
