import { Component, OnInit } from "@angular/core";
import { QASet, SettingsComponent } from "../settings/settings.component";
import { QaConfigService } from "../util/service/qaConfig/qa-config.service";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-end-user",
  templateUrl: "./end-user.component.html",
  styleUrls: ["./end-user.component.css"]
})
export class EndUserComponent extends SettingsComponent implements OnInit {

  public responseId: number;

  constructor(
    protected qaConfigService: QaConfigService,
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router
  ) {
    super(qaConfigService, _activatedRoute, _router);
    this._activatedRoute.params.subscribe(params => {
      if (params["id"] !== undefined) {
        this.qaSets = this.qaConfigService.getQAConfig(params["id"]);
        this.mode = "view";
        this.id = Number(params["id"]);
      }
      if (params["responseId"] !== undefined) {
        this.qaSets.push(new QASet());
        this.mode = "response";
        this.responseId = Number(params["responseId"]);
      }
    });
  }
}
