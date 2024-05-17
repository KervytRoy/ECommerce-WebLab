/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ForgotPasswordRequest } from '../../models/forgot-password-request';

export interface UsersForgotPassword$Params {

/**
 * Input your tenant Id to access this API
 */
  tenant: string;
      body: ForgotPasswordRequest
}

export function usersForgotPassword(http: HttpClient, rootUrl: string, params: UsersForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, usersForgotPassword.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.body(params.body, 'application/json');
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

usersForgotPassword.PATH = '/api/users/forgot-password';
