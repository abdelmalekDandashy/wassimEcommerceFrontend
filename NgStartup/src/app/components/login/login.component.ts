import { Component, OnInit } from "@angular/core";

import { CommonService } from "../../core/services/common.service";
import { setTestabilityGetter } from "@angular/core/src/testability/testability";
import { Router } from "@angular/router";
import {
  Proxy,
} from "../../core/services/proxy.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.model = {};
    this.model.USERNAME = "";
    this.model.PASSWORD = "";
  }

  ngOnInit() {}
  login() {
    this.loading = true;
    this.CmSvc.Is_Logged_In.next(true);
    this.router.navigate(["/menu"]);
    
  }
}
