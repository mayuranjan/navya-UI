import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public questions: Array<string> = new Array<string>();

  constructor() {
    this.questions.push("Untitled Question");
  }

  ngOnInit() {
  }

  /**
   * addNewQuestion
   */
  public addNewQuestion(index: number) {
    this.questions.push("Untitled Question");
  }

  /**
   * removeQuestion
   */
  public removeQuestion(index: number) {
    this.questions.splice(index, 1);
    console.log(this.questions);
    console.log(index);
  }

  /**
   * updateQuestion
   */
  public updateQuestion(updatedQuestion: string, index: number) {
    this.questions[index] = updatedQuestion;
  }

  /**
   * setAnswerType
   */
  public setAnswerType(answerType: string, index: number) {
    
  }

}

class QASet {
  public question: string;
  public answerType: string;
  public paragraph: Paragraph;
  public multipleChoice: Array<MultipleChoice>;
}

class Paragraph {
  public answer: string;
}

class MultipleChoice {
  public optionLabel: string;
  public isSelected: boolean;
}