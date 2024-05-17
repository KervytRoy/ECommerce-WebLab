/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuditDto } from '../models/audit-dto';
import { personalChangePassword } from '../fn/personal/personal-change-password';
import { PersonalChangePassword$Params } from '../fn/personal/personal-change-password';
import { personalGetLogs } from '../fn/personal/personal-get-logs';
import { PersonalGetLogs$Params } from '../fn/personal/personal-get-logs';
import { personalGetPermissions } from '../fn/personal/personal-get-permissions';
import { PersonalGetPermissions$Params } from '../fn/personal/personal-get-permissions';
import { personalGetProfile } from '../fn/personal/personal-get-profile';
import { PersonalGetProfile$Params } from '../fn/personal/personal-get-profile';
import { personalUpdateProfile } from '../fn/personal/personal-update-profile';
import { PersonalUpdateProfile$Params } from '../fn/personal/personal-update-profile';
import { UserDetailsDto } from '../models/user-details-dto';

@Injectable({ providedIn: 'root' })
export class PersonalService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `personalGetProfile()` */
  static readonly PersonalGetProfilePath = '/api/personal/profile';

  /**
   * Get profile details of currently logged in user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personalGetProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  personalGetProfile$Response(params?: PersonalGetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDetailsDto>> {
    return personalGetProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Get profile details of currently logged in user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personalGetProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personalGetProfile(params?: PersonalGetProfile$Params, context?: HttpContext): Observable<UserDetailsDto> {
    return this.personalGetProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDetailsDto>): UserDetailsDto => r.body)
    );
  }

  /** Path part for operation `personalUpdateProfile()` */
  static readonly PersonalUpdateProfilePath = '/api/personal/profile';

  /**
   * Update profile details of currently logged in user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personalUpdateProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personalUpdateProfile$Response(params: PersonalUpdateProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return personalUpdateProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Update profile details of currently logged in user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personalUpdateProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personalUpdateProfile(params: PersonalUpdateProfile$Params, context?: HttpContext): Observable<void> {
    return this.personalUpdateProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `personalChangePassword()` */
  static readonly PersonalChangePasswordPath = '/api/personal/change-password';

  /**
   * Change password of currently logged in user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personalChangePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personalChangePassword$Response(params: PersonalChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return personalChangePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Change password of currently logged in user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personalChangePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personalChangePassword(params: PersonalChangePassword$Params, context?: HttpContext): Observable<void> {
    return this.personalChangePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `personalGetPermissions()` */
  static readonly PersonalGetPermissionsPath = '/api/personal/permissions';

  /**
   * Get permissions of currently logged in user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personalGetPermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  personalGetPermissions$Response(params?: PersonalGetPermissions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return personalGetPermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Get permissions of currently logged in user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personalGetPermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personalGetPermissions(params?: PersonalGetPermissions$Params, context?: HttpContext): Observable<Array<string>> {
    return this.personalGetPermissions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `personalGetLogs()` */
  static readonly PersonalGetLogsPath = '/api/personal/logs';

  /**
   * Get audit logs of currently logged in user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personalGetLogs()` instead.
   *
   * This method doesn't expect any request body.
   */
  personalGetLogs$Response(params?: PersonalGetLogs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AuditDto>>> {
    return personalGetLogs(this.http, this.rootUrl, params, context);
  }

  /**
   * Get audit logs of currently logged in user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personalGetLogs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personalGetLogs(params?: PersonalGetLogs$Params, context?: HttpContext): Observable<Array<AuditDto>> {
    return this.personalGetLogs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AuditDto>>): Array<AuditDto> => r.body)
    );
  }

}
