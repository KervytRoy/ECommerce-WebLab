/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantDto } from '../../models/tenant-dto';

export interface TenantsGetList$Params {
}

export function tenantsGetList(http: HttpClient, rootUrl: string, params?: TenantsGetList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TenantDto>>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TenantDto>>;
    })
  );
}

tenantsGetList.PATH = '/api/tenants';
