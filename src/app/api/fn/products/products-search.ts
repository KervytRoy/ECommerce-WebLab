/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginationResponseOfProductDto } from '../../models/pagination-response-of-product-dto';
import { SearchProductsRequest } from '../../models/search-products-request';

export interface ProductsSearch$Params {
      body: SearchProductsRequest
}

export function productsSearch(http: HttpClient, rootUrl: string, params: ProductsSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginationResponseOfProductDto>> {
  const rb = new RequestBuilder(rootUrl, productsSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginationResponseOfProductDto>;
    })
  );
}

productsSearch.PATH = '/api/v1/products/search';
