import { Component, OnInit } from '@angular/core';
import {
  QASet,
  SettingsComponent,
  MultipleChoice
} from '../settings/settings.component';
import { QaConfigService } from '../util/service/qaConfig/qa-config.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.css']
})
export class EndUserComponent extends SettingsComponent {
  public responseId: number;
  public response: EndUserResponse;

  public isPublished: boolean;

  constructor(
    protected qaConfigService: QaConfigService,
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router
  ) {
    super(qaConfigService, _activatedRoute, _router);
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.qaConfigService.getQAConfig(params['id']).subscribe((result) => {
          this.isPublished = JSON.parse(result['_body']).isPublished;
          if (this.isPublished) {
            this.qaSets = JSON.parse(result['_body']).value;
          }
          this.mode = 'view';
          this.removeAddOptionFromMCQ();

          if (params['responseId'] !== undefined) {
            this.mode = 'response';
            this.responseId = Number(params['responseId']);
            this.getResponse();
          } else {
            this.response = new EndUserResponse();
            this.response.questionId = this.id;
            this.response.answers = new Array<Answer>();
            for (let index = 0; index < this.qaSets.length; index++) {
              this.response.answers.push(new Answer());
            }
          }
        });
        this.id = Number(params['id']);
      }
    });
  }

  /**
   * setParagraphAnswer
   */
  public setParagraphAnswer(answer: string, index: number) {
    this.response.answers[index].answerType = 'Paragraph';
    this.response.answers[index].paragraph = answer;
  }

  /**
   * setMultipleChoiceAnswer
   */
  public setMultipleChoiceAnswer(answer: number, index: number) {
    this.response.answers[index].answerType = 'Multiple Choice';
    this.response.answers[index].multipleChoiceIndex = answer;
  }

  /**
   * submitResponse
   */
  public submitResponse() {
    this.qaConfigService.generateResponseID().subscribe((responseId) => {
      this.response.responseId = responseId.json();
      this.qaConfigService.submitQAResponse(this.response).subscribe((result) => {
        this.responseId = result.json();
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Response Submitted Successfully',
          showConfirmButton: false,
          timer: 1000
        });

        this._router.navigate(['/form/view', this.id, this.responseId]);
      });
    });
  }

  /**
   * getResponse
   */
  public getResponse() {
    this.qaConfigService.getQAResponse(this.responseId).subscribe((result) => {
      this.response = JSON.parse(result['_body']);
    });
  }
}

export class EndUserResponse {
  public responseId: number;
  public questionId: number;
  public answers: Array<Answer>;
}

export class Answer {
  public answerType: string;
  public paragraph: string;
  public multipleChoiceIndex: number;
}
