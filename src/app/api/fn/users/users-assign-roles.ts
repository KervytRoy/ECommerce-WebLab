/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserRolesRequest } from '../../models/user-roles-request';

export interface UsersAssignRoles$Params {
  id: string | null;
      body: UserRolesRequest
}

export function usersAssignRoles(http: HttpClient, rootUrl: string, params: UsersAssignRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, usersAssignRoles.PATH, 'post');
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

usersAssignRoles.PATH = '/api/users/{id}/roles';
