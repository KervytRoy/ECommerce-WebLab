/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginationResponseOfBrandDto } from '../../models/pagination-response-of-brand-dto';
import { SearchBrandsRequest } from '../../models/search-brands-request';

export interface BrandsSearch$Params {
      body: SearchBrandsRequest
}

export function brandsSearch(http: HttpClient, rootUrl: string, params: BrandsSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginationResponseOfBrandDto>> {
  const rb = new RequestBuilder(rootUrl, brandsSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginationResponseOfBrandDto>;
    })
  );
}

brandsSearch.PATH = '/api/v1/brands/search';
