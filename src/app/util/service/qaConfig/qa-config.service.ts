import { Injectable } from '@angular/core';
import { Http } from '../../../../../node_modules/@angular/http';
import { QASet } from '../../../settings/settings.component';
import { Response } from '../../../end-user/end-user.component';

@Injectable({
  providedIn: 'root'
})
export class QaConfigService {
  constructor(private _http: Http) { }

  /**
   * saveQAConfig
   */
  public saveQAConfig(qaConfig: Array<QASet>): number {
    // this._http.post();
    let config: Array<any>;
    if (localStorage.getItem('qaSetConfigurations') === null) {
      config = [{ id: this.generateQuestionID(), value: qaConfig }];
    } else {
      config = JSON.parse(localStorage.getItem('qaSetConfigurations'));
      config.push({ id: this.generateQuestionID(), value: qaConfig });
    }
    localStorage.setItem('qaSetConfigurations', JSON.stringify(config));

    return config[config.length - 1].id;
  }

  /**
   * updateQAConfig
   */
  public updateQAConfig(qaConfig: Array<QASet>, id: number) {
    const qaSetConfigurations = JSON.parse(
      localStorage.getItem('qaSetConfigurations')
    );
    qaSetConfigurations.forEach(qaSetConfiguration => {
      if (qaSetConfiguration.id === Number(id)) {
        qaSetConfiguration.value = qaConfig;
      }
    });

    localStorage.setItem(
      'qaSetConfigurations',
      JSON.stringify(qaSetConfigurations)
    );
  }

  /**
   * getQAConfig
   */
  public getQAConfig(id: number): Array<QASet> {
    let qaConfig: Array<QASet>;
    const qaSetConfigurations = JSON.parse(
      localStorage.getItem('qaSetConfigurations')
    );
    qaSetConfigurations.forEach(qaSetConfiguration => {
      if (qaSetConfiguration.id === Number(id)) {
        qaConfig = qaSetConfiguration.value;
      }
    });

    return qaConfig;
  }

  /**
   * submitQAResponse
   */
  public submitQAResponse(qaResponse: Response): number {
    let qaSetResponses: Array<Response>;
    if (localStorage.getItem('qaSetResponses') === null) {
      qaSetResponses = new Array<Response>();
    } else {
      qaSetResponses = JSON.parse(
        localStorage.getItem('qaSetResponses')
      );
    }

    qaResponse.responseId = this.generateResponseID();
    qaSetResponses.push(qaResponse);

    localStorage.setItem(
      'qaSetResponses',
      JSON.stringify(qaSetResponses)
    );

    return qaSetResponses[qaSetResponses.length - 1].responseId;
  }

  private generateQuestionID(): number {
    const qaSetConfigurations = localStorage.getItem('qaSetConfigurations');
    const count =
      JSON.parse(qaSetConfigurations) == null
        ? 0
        : JSON.parse(qaSetConfigurations).length;
    return count;
  }

  private generateResponseID(): number {
    const qaSetResponses = localStorage.getItem('qaSetResponses');
    const count =
      JSON.parse(qaSetResponses) == null
        ? 0
        : JSON.parse(qaSetResponses).length;
    return count;
  }
}
