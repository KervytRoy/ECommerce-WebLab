/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GenerateRandomBrandRequest } from '../../models/generate-random-brand-request';

export interface BrandsGenerateRandom$Params {
      body: GenerateRandomBrandRequest
}

export function brandsGenerateRandom(http: HttpClient, rootUrl: string, params: BrandsGenerateRandom$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, brandsGenerateRandom.PATH, 'post');
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

brandsGenerateRandom.PATH = '/api/v1/brands/generate-random';
