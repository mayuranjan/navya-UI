import { Component, OnInit } from '@angular/core';
import { QASet, SettingsComponent } from '../settings/settings.component';
import { QaConfigService } from '../util/service/qaConfig/qa-config.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.css']
})
export class EndUserComponent extends SettingsComponent implements OnInit {

  public responseId: number;
  public response: Response;

  constructor(
    protected qaConfigService: QaConfigService,
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router
  ) {
    super(qaConfigService, _activatedRoute, _router);
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.qaSets = this.qaConfigService.getQAConfig(params['id']);
        this.mode = 'view';
        this.id = Number(params['id']);
      }
      if (params['responseId'] !== undefined) {
        this.qaSets.push(new QASet());
        this.mode = 'response';
        this.responseId = Number(params['responseId']);
        this.response.responseId = this.responseId;
      } else {
        this.response = new Response();
        this.response.questionId = this.id;
        this.response.answers = new Array<Answer>();
        for (let index = 0; index < this.qaSets.length; index++) {
          this.response.answers.push(new Answer());
        }
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
    this.responseId = this.qaConfigService.submitQAResponse(this.response);
    swal({
      position: 'top-end',
      type: 'success',
      title: 'Response Submitted Successfully',
      showConfirmButton: false,
      timer: 1000
    });

    this._router.navigate(['/form/view', this.id, this.responseId]);
  }
}

export class Response {
  public responseId: number;
  public questionId: number;
  public answers: Array<Answer>;
}

export class Answer {
  public answerType: string;
  public paragraph: string;
  public multipleChoiceIndex: number;
}
