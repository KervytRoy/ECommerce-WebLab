/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateBrandRequest } from '../../models/create-brand-request';

export interface BrandsCreate$Params {
      body: CreateBrandRequest
}

export function brandsCreate(http: HttpClient, rootUrl: string, params: BrandsCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, brandsCreate.PATH, 'post');
  if (params) {
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

brandsCreate.PATH = '/api/v1/brands';
