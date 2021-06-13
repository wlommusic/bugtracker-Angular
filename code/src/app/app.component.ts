import { Component, OnInit } from '@angular/core';
import { authservice } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private authservice: authservice){}
  ngOnInit() {
    this.authservice.autologin();
  }
}
  
