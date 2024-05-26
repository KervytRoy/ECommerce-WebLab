import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokensService } from '../api/services';
import { TokensRefresh$Params } from '../api/fn/tokens/tokens-refresh';
import { TokenResponse } from '../api/models';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private tokensService: TokensService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token && !this.isRefreshTokenRequest(req)) {
      const decodedToken = jwt_decode.jwtDecode(token);
      const tokenExpiryTime = decodedToken.exp;

      if (tokenExpiryTime != undefined) {
        if (this.isTokenExpiring(tokenExpiryTime)) {
          const params: TokensRefresh$Params = {
            tenant: 'root',
            body: {
              refreshToken: localStorage.getItem('refreshToken')!,
              token: token
            }
          };
          this.tokensService.tokensRefresh(params).pipe(
            catchError(error => {
              console.error('Ocurrió un error:', error);
              return throwError(error);
            })
          ).subscribe((response: TokenResponse) => {
            if (response.token && response.refreshTokenExpiryTime && response.refreshToken) {
              localStorage.setItem('token', response.token);
              /*localStorage.setItem('refreshToken', response.refreshTokenExpiryTime);*/
              localStorage.setItem('refreshTokenExpiryTime', response.refreshTokenExpiryTime);
            }
          }, error => {
            console.error('Error en la suscripción:', error);
          });
        }
      }

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

  isTokenExpiring(tokenExpiryTime: number): boolean {
    const currentTime = Math.floor(Date.now() / 1000);
    const timeLeft = tokenExpiryTime - currentTime;

    return timeLeft < 1800;
  }

  isRefreshTokenRequest(req: HttpRequest<any>): boolean {
    return req.url.includes('/tokens/refresh');
  }
}
