/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantDto } from '../../models/tenant-dto';

export interface TenantsGet$Params {
  id: string | null;
}

export function tenantsGet(http: HttpClient, rootUrl: string, params: TenantsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantDto>> {
  const rb = new RequestBuilder(rootUrl, tenantsGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TenantDto>;
    })
  );
}

tenantsGet.PATH = '/api/tenants/{id}';
