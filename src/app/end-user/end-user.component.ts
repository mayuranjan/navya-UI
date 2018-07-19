import { Component, OnInit } from '@angular/core';
import { QASet } from '../settings/settings.component';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.css']
})
export class EndUserComponent implements OnInit {

  public qaSets: Array<QASet>;

  constructor() { }

  ngOnInit() {
  }

}
