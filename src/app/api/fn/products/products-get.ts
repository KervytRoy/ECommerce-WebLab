/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductDetailsDto } from '../../models/product-details-dto';

export interface ProductsGet$Params {
  id: string;
}

export function productsGet(http: HttpClient, rootUrl: string, params: ProductsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDetailsDto>> {
  const rb = new RequestBuilder(rootUrl, productsGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductDetailsDto>;
    })
  );
}

productsGet.PATH = '/api/v1/products/{id}';
