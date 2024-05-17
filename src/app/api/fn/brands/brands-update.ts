/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateBrandRequest } from '../../models/update-brand-request';

export interface BrandsUpdate$Params {
  id: string;
      body: UpdateBrandRequest
}

export function brandsUpdate(http: HttpClient, rootUrl: string, params: BrandsUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, brandsUpdate.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

brandsUpdate.PATH = '/api/v1/brands/{id}';
