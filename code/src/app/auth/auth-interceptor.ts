import { Injectable } from "@angular/core";
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";
import { authservice } from "./auth.service";
import { take, exhaustMap } from "rxjs/operators";

@Injectable()
export class AuthinterceptorService implements HttpInterceptor {
  constructor(private authservice: authservice) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authservice.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set("auth", user.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
