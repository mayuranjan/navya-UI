import { Component, OnInit } from '@angular/core';
import { QaConfigService } from '../util/service/qaConfig/qa-config.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public qaSets: Array<QASet> = new Array<QASet>();
  public mode: string;
  public id: number;

  public responsesByQuestion: any;
  public responseCount: number;

  constructor(
    protected qaConfigService: QaConfigService,
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router
  ) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.qaConfigService.getQAConfig(params['id']).subscribe((result) => {
          this.qaSets = result.json().value;
          if (result.json().isPublished) {
            this.mode = 'publish';
            this.removeAddOptionFromMCQ();
            this.qaConfigService.getQAResponsesByQuestionCount(this.id).subscribe((responseCount) => {
              this.responseCount = responseCount.json();
            });
          } else {
            this.mode = 'edit';
          }
        });
        this.id = Number(params['id']);
      } else {
        this.qaSets.push(new QASet());
        this.mode = 'create';
      }
    });
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
    this.qaSets.forEach(qaSet => {
      if (i === index) {
        qaSet.isActive = true;
      } else {
        qaSet.isActive = false;
      }
      i++;
    });
  }

  /**
   * save
   */
  public save() {
    this.qaConfigService.generateQuestionID().subscribe((result) => {
      const questionId = result.json();

      this.qaConfigService.saveQAConfig(this.qaSets, questionId).subscribe((id) => {
        this._router.navigate(['/form/edit', id.json()]);
      });
    });



    swal({
      position: 'top-end',
      type: 'success',
      title: 'Saved Successfully',
      showConfirmButton: false,
      timer: 1000
    });
  }

  /**
   * edit
   */
  public edit() {
    this.mode = 'edit';
  }

  /**
   * showResponses
   */
  public showResponses() {
    this.qaConfigService.getAllQAResponsesByQuestion(this.id).subscribe((result) => {
      this.responsesByQuestion = result.json();
    });
  }

  /**
   * createNewForm
   */
  public createNewForm() {
    this._router.navigate(['/form/edit']);
  }

  /**
   * update
   */
  public update() {
    this.qaConfigService.updateQAConfig(this.qaSets, this.id).subscribe((result) => {
      swal('Success', 'Updated Successfully', 'success');
    });
  }

  /**
   * openResponse
   */
  public openResponse(responseId: number) {
    this._router.navigate(['/form/view', this.id, responseId]);
  }

  /**
   * publish
   */
  public publish() {
    this.qaConfigService.updateQAConfig(this.qaSets, this.id, true).subscribe(() => {
      this.mode = 'publish';
      swal({
        title: 'Published Successfully',
        text: 'Would you like to view the Form',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, show me!'
      }).then((result) => {
        if (result.value) {
          // this._router.navigate(['/form/view', this.id]);

          const url = '/form/view/' + this.id;
          window.open(url, '_blank');
        }
      });
    });
  }

  /**
   * setIsQuestionRequired
   */
  public setIsQuestionRequired(isQuestionRequired: boolean, index: number) {
    this.qaSets[index]['isRequired'] = isQuestionRequired;
  }

  /**
   * setMultipleChoiceOptions
   */
  public setMultipleChoiceOptions(options: Array<MultipleChoice>, index: number) {
    this.qaSets[index]['multipleChoices'] = options;
  }

  /**
   * removeAddOptionFromMCQ
   */
  protected removeAddOptionFromMCQ() {
    let i = 0,
      j = 0;
    this.qaSets.forEach((qaSet: QASet) => {
      if (qaSet.answerType === 'Multiple Choice') {
        qaSet.multipleChoices.forEach((multipleChoice: MultipleChoice) => {
          if (multipleChoice.optionLabel === 'Add option') {
            this.qaSets[i].multipleChoices.splice(j, 1);
          }
          j++;
        });
      }
      i++;
    });
  }
}

export class QASet {
  public question: string;
  public answerType: string;
  public isActive: boolean;
  public isRequired: boolean;
  public multipleChoices: Array<MultipleChoice>;

  constructor() {
    this.question = 'Untitled Question';
    this.answerType = 'Paragraph';
    this.isActive = true;
    this.isRequired = false;
    this.multipleChoices = new Array<MultipleChoice>();
  }
}

export class MultipleChoice {
  public optionLabel: string;
  public isSelected: boolean;

  constructor(optionLabel?: string) {
    if (optionLabel !== undefined) {
      this.optionLabel = optionLabel;
    } else {
      this.optionLabel = 'Add option';
    }
  }
}
