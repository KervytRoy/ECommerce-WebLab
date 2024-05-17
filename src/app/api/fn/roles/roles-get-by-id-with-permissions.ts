/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';

export interface RolesGetByIdWithPermissions$Params {
  id: string | null;
}

export function rolesGetByIdWithPermissions(http: HttpClient, rootUrl: string, params: RolesGetByIdWithPermissions$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
  const rb = new RequestBuilder(rootUrl, rolesGetByIdWithPermissions.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoleDto>;
    })
  );
}

rolesGetByIdWithPermissions.PATH = '/api/roles/{id}/permissions';
