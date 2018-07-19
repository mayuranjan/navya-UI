import { Injectable } from "@angular/core";
import { Http, Jsonp } from "../../../../../node_modules/@angular/http";
import { QASet } from "../../../settings/settings.component";

@Injectable({
  providedIn: "root"
})
export class QaConfigService {
  constructor(private _http: Http) {}

  /**
   * saveQAConfig
   */
  public saveQAConfig(qaConfig: Array<QASet>): number {
    // this._http.post();
    let config: Array<any>;
    if (localStorage.getItem("qaSetConfigurations") === null) {
      config = [{ id: this.generateID(), value: qaConfig }];
    } else {
      config = JSON.parse(localStorage.getItem("qaSetConfigurations"));
      config.push({ id: this.generateID(), value: qaConfig });
    }
    localStorage.setItem("qaSetConfigurations", JSON.stringify(config));

    return config[config.length - 1].id;
  }

  /**
   * updateQAConfig
   */
  public updateQAConfig(qaConfig: Array<QASet>, id: number) {
    const qaSetConfigurations = JSON.parse(
      localStorage.getItem("qaSetConfigurations")
    );
    qaSetConfigurations.forEach(qaSetConfiguration => {
      if (qaSetConfiguration.id === Number(id)) {
        qaSetConfiguration.value = qaConfig;
      }
    });

    localStorage.setItem(
      "qaSetConfigurations",
      JSON.stringify(qaSetConfigurations)
    );
  }

  /**
   * getQAConfig
   */
  public getQAConfig(id: number): Array<QASet> {
    let qaConfig: Array<QASet>;
    const qaSetConfigurations = JSON.parse(
      localStorage.getItem("qaSetConfigurations")
    );
    qaSetConfigurations.forEach(qaSetConfiguration => {
      if (qaSetConfiguration.id === Number(id)) {
        qaConfig = qaSetConfiguration.value;
      }
    });

    return qaConfig;
  }

  private generateID(): number {
    const qaSetConfigurations = localStorage.getItem("qaSetConfigurations");
    const count =
      JSON.parse(qaSetConfigurations) == null
        ? 0
        : JSON.parse(qaSetConfigurations).length;
    return count;
  }
}
