/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserDetailsDto } from '../../models/user-details-dto';

export interface UsersGetById$Params {
  id: string | null;
}

export function usersGetById(http: HttpClient, rootUrl: string, params: UsersGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDetailsDto>> {
  const rb = new RequestBuilder(rootUrl, usersGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserDetailsDto>;
    })
  );
}

usersGetById.PATH = '/api/users/{id}';
