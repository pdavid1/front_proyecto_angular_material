//Segunda forma de crear interceptors de forma manual PARA CASO DE SSR
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TestInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("---------------------- INTERCEPTOR 2 ---------------------")

    const token = localStorage.getItem("access_token")

    const peticion = req.clone({
      setHeaders:{
        'Authorization': 'Bearer ' + token
      }
    })

    return next.handle(peticion)
  }
}
