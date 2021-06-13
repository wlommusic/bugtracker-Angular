import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { authservice, authresponsedata } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent  implements OnDestroy{
  isloginMode = true;
  texttype: boolean;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;
  private closeSub : Subscription

  constructor(
    private authservice: authservice,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isloginMode = !this.isloginMode;
  }
  onSwitchTextType() {
    this.texttype = !this.texttype;
  }

  onsubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<authresponsedata>;

    this.isLoading = true;

    if (this.isloginMode) {
      authObs = this.authservice.login(email, password);
    } else {
      authObs = this.authservice.signup(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(["/bugs"]);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showError(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }
  onHandleError() {
    this.error = null;
  }
  ngOnDestroy(){
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }

  }

  private showError(message: string) {
    const alertCmpFacyoy =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      const hostViewContainerRef = this.alertHost.viewContainerRef;
      hostViewContainerRef.clear()
      const componentRef = hostViewContainerRef.createComponent(alertCmpFacyoy);
      componentRef.instance.message= message;
      this.closeSub=componentRef.instance.close.subscribe(()=>{
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      });
      
  }

  
}
