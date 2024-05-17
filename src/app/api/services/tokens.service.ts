/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { TokenResponse } from '../models/token-response';
import { tokensGetToken } from '../fn/tokens/tokens-get-token';
import { TokensGetToken$Params } from '../fn/tokens/tokens-get-token';
import { tokensRefresh } from '../fn/tokens/tokens-refresh';
import { TokensRefresh$Params } from '../fn/tokens/tokens-refresh';

@Injectable({ providedIn: 'root' })
export class TokensService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tokensGetToken()` */
  static readonly TokensGetTokenPath = '/api/tokens';

  /**
   * Request an access token using credentials.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tokensGetToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tokensGetToken$Response(params: TokensGetToken$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponse>> {
    return tokensGetToken(this.http, this.rootUrl, params, context);
  }

  /**
   * Request an access token using credentials.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tokensGetToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tokensGetToken(params: TokensGetToken$Params, context?: HttpContext): Observable<TokenResponse> {
    return this.tokensGetToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenResponse>): TokenResponse => r.body)
    );
  }

  /** Path part for operation `tokensRefresh()` */
  static readonly TokensRefreshPath = '/api/tokens/refresh';

  /**
   * Request an access token using a refresh token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tokensRefresh()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tokensRefresh$Response(params: TokensRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponse>> {
    return tokensRefresh(this.http, this.rootUrl, params, context);
  }

  /**
   * Request an access token using a refresh token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tokensRefresh$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tokensRefresh(params: TokensRefresh$Params, context?: HttpContext): Observable<TokenResponse> {
    return this.tokensRefresh$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenResponse>): TokenResponse => r.body)
    );
  }

}
