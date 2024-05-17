/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';

export interface RolesGetList$Params {
}

export function rolesGetList(http: HttpClient, rootUrl: string, params?: RolesGetList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
  const rb = new RequestBuilder(rootUrl, rolesGetList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RoleDto>>;
    })
  );
}

rolesGetList.PATH = '/api/roles';
