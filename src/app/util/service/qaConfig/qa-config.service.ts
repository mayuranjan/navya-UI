import { Injectable } from '@angular/core';
import { Http, Response } from '../../../../../node_modules/@angular/http';
import { QASet } from '../../../settings/settings.component';
import { EndUserResponse } from '../../../end-user/end-user.component';

import { environment } from 'src/environments/environment';
import { Observable } from '../../../../../node_modules/rxjs';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class QaConfigService {

  constructor(private _http: Http) { }

  /**
   * saveQAConfig
   */
  public saveQAConfig(qaConfig: Array<QASet>, questionId: number): Observable<Response> {
    return this._http
      .post(API_URL + '/questionSet', { questionId: ++questionId, value: qaConfig });
  }

  /**
   * updateQAConfig
   */
  public updateQAConfig(qaConfig: Array<QASet>, questionId: number, isPublished?: boolean): Observable<Response> {
    return this._http
      .put(API_URL + '/questionSets/' + questionId, { questionId: questionId, value: qaConfig, isPublished: isPublished });
  }

  /**
   * getQAConfig
   */
  public getQAConfig(id: number): Observable<Response> {
    return this._http.get(API_URL + '/questionSets/' + id);
  }

  /**
   * submitQAResponse
   */
  public submitQAResponse(qaResponse: EndUserResponse): Observable<Response> {
    return this._http
      .post(API_URL + '/answerSet', qaResponse);
  }

  /**
   * getQAResponse
   */
  public getQAResponse(responseId: number): Observable<Response> {
    return this._http.get(API_URL + '/answerSets/' + responseId);
  }

  /**
   * getAllQAResponsesByQuestion
   */
  public getAllQAResponsesByQuestion(questionId: number): Observable<Response> {
    return this._http.get(API_URL + '/answerSetsByQuestion/' + questionId);
  }

  /**
   * getQAResponsesByQuestionCount
   */
  public getQAResponsesByQuestionCount(questionId: number): Observable<Response> {
    return this._http.get(API_URL + '/answerSetsByQuestion/count/' + questionId);
  }

  public generateQuestionID(): Observable<Response> {
    return this._http.get(API_URL + '/questionSets/count');
  }

  public generateResponseID(): Observable<Response> {
    return this._http.get(API_URL + '/answerSets/count');
  }
}
