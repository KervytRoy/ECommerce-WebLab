/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExportProductsRequest } from '../../models/export-products-request';

export interface ProductsExport$Params {
      body: ExportProductsRequest
}

export function productsExport(http: HttpClient, rootUrl: string, params: ProductsExport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, productsExport.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

productsExport.PATH = '/api/v1/products/export';
