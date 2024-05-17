/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductDto } from '../../models/product-dto';

export interface ProductsGetDapper$Params {
  id?: string;
}

export function productsGetDapper(http: HttpClient, rootUrl: string, params?: ProductsGetDapper$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDto>> {
  const rb = new RequestBuilder(rootUrl, productsGetDapper.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductDto>;
    })
  );
}

productsGetDapper.PATH = '/api/v1/products/dapper';
