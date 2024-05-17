/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface UsersConfirmPhoneNumber$Params {
  userId?: string | null;
  code?: string | null;
}

export function usersConfirmPhoneNumber(http: HttpClient, rootUrl: string, params?: UsersConfirmPhoneNumber$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, usersConfirmPhoneNumber.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
    rb.query('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

usersConfirmPhoneNumber.PATH = '/api/users/confirm-phone-number';
