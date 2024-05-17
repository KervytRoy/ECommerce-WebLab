import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const clonedReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });

      return next.handle(clonedReq);
    } else {
      return next.handle(req);
    }
  }
}
