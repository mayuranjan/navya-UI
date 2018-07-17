import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public qaSets: Array<QASet> = new Array<QASet>();

  constructor() {
    this.qaSets.push(new QASet());
  }

  ngOnInit() {
  }

  /**
   * addNewQuestion
   */
  public addNewQuestion(index: number) {
    this.qaSets.push(new QASet());
  }

  /**
   * removeQuestion
   */
  public removeQuestion(index: number) {
    this.qaSets.splice(index, 1);
    console.log(this.qaSets);
    console.log(index);
  }

  /**
   * updateQuestion
   */
  public updateQuestion(updatedQuestion: string, index: number) {
    this.qaSets[index].question = updatedQuestion;
  }

  /**
   * setAnswerType
   */
  public setAnswerType(answerType: string, index: number) {
    this.qaSets[index].answerType = answerType;
  }

}

class QASet {
  public question: string;
  public answerType: string;
  public paragraph: Paragraph;
  public multipleChoice: Array<MultipleChoice>;

  constructor() {
    this.question = "Untitled Question";
    this.answerType = "Paragraph";
  }
}

class Paragraph {
  public answer: string;
}

class MultipleChoice {
  public optionLabel: string;
  public isSelected: boolean;
}