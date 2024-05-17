/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserDetailsDto } from '../../models/user-details-dto';

export interface UsersGetList$Params {
}

export function usersGetList(http: HttpClient, rootUrl: string, params?: UsersGetList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserDetailsDto>>> {
  const rb = new RequestBuilder(rootUrl, usersGetList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UserDetailsDto>>;
    })
  );
}

usersGetList.PATH = '/api/users';
