import { Component, OnInit } from '@angular/core';
import { QaConfigService } from '../util/service/qaConfig/qa-config.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public qaSets: Array<QASet> = new Array<QASet>();
  public mode: string;
  public id: number;

  constructor(private qaConfigService: QaConfigService,
    public _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.qaSets = this.qaConfigService.getQAConfig(params['id']);
        this.mode = 'edit';
        this.id = Number(params['id']);
      } else {
        this.qaSets.push(new QASet());
        this.mode = 'create';
      }
    });
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

  /**
   * setQASetActive
   * index: number   */
  public setQASetActive(index: number) {
    let i = 0;
    this.qaSets.forEach((qaSet) => {
      if (i === index) {
        qaSet.isActive = true;
      } else {
        qaSet.isActive = false;
      }
      i++;
    });

    setTimeout(() => {
      this.clearQASetSelection();
    }, 5000);
  }

  /**
   * clearQASetSelection
   */
  private clearQASetSelection() {
    this.qaSets.forEach((qaSet) => {
      qaSet.isActive = false;
    });
  }

  /**
   * save
   */
  public save() {
    this.qaConfigService.saveQAConfig(this.qaSets);
  }

  /**
   * edit
   */
  public edit() {
    this.qaConfigService.updateQAConfig(this.qaSets, this.id);
  }

}

export class QASet {
  public question: string;
  public answerType: string;
  public paragraph: Paragraph;
  public isActive: boolean;
  public multipleChoice: Array<MultipleChoice>;

  constructor() {
    this.question = 'Untitled Question';
    this.answerType = 'Paragraph';
    this.isActive = true;
  }
}

class Paragraph {
  public answer: string;
}

class MultipleChoice {
  public optionLabel: string;
  public isSelected: boolean;
}
