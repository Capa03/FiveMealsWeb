import { HttpInterceptor,HttpEvent,HttpHandler,HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('Token');
        console.log(token);
        if (token) {
            req = req.clone({
                setHeaders: { Autorization: `Bearer ${token}`},
            });
        }
      
        return next.handle(req);
    }
}