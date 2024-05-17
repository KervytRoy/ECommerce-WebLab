/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RefreshTokenRequest } from '../../models/refresh-token-request';
import { TokenResponse } from '../../models/token-response';

export interface TokensRefresh$Params {

/**
 * Input your tenant Id to access this API
 */
  tenant: string;
      body: RefreshTokenRequest
}

export function tokensRefresh(http: HttpClient, rootUrl: string, params: TokensRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponse>> {
  const rb = new RequestBuilder(rootUrl, tokensRefresh.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TokenResponse>;
    })
  );
}

tokensRefresh.PATH = '/api/tokens/refresh';
