/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpgradeSubscriptionRequest } from '../../models/upgrade-subscription-request';

export interface TenantsUpgradeSubscription$Params {
  id: string | null;
      body: UpgradeSubscriptionRequest
}

export function tenantsUpgradeSubscription(http: HttpClient, rootUrl: string, params: TenantsUpgradeSubscription$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, tenantsUpgradeSubscription.PATH, 'post');
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

tenantsUpgradeSubscription.PATH = '/api/tenants/{id}/upgrade';
