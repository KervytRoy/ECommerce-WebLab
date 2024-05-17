/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { RoleDto } from '../models/role-dto';
import { rolesDelete } from '../fn/roles/roles-delete';
import { RolesDelete$Params } from '../fn/roles/roles-delete';
import { rolesGetById } from '../fn/roles/roles-get-by-id';
import { RolesGetById$Params } from '../fn/roles/roles-get-by-id';
import { rolesGetByIdWithPermissions } from '../fn/roles/roles-get-by-id-with-permissions';
import { RolesGetByIdWithPermissions$Params } from '../fn/roles/roles-get-by-id-with-permissions';
import { rolesGetList } from '../fn/roles/roles-get-list';
import { RolesGetList$Params } from '../fn/roles/roles-get-list';
import { rolesRegisterRole } from '../fn/roles/roles-register-role';
import { RolesRegisterRole$Params } from '../fn/roles/roles-register-role';
import { rolesUpdatePermissions } from '../fn/roles/roles-update-permissions';
import { RolesUpdatePermissions$Params } from '../fn/roles/roles-update-permissions';

@Injectable({ providedIn: 'root' })
export class RolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `rolesGetList()` */
  static readonly RolesGetListPath = '/api/roles';

  /**
   * Get a list of all roles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetList$Response(params?: RolesGetList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
    return rolesGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a list of all roles.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetList(params?: RolesGetList$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.rolesGetList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

  /** Path part for operation `rolesRegisterRole()` */
  static readonly RolesRegisterRolePath = '/api/roles';

  /**
   * Create or update a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesRegisterRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesRegisterRole$Response(params: RolesRegisterRole$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return rolesRegisterRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Create or update a role.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesRegisterRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesRegisterRole(params: RolesRegisterRole$Params, context?: HttpContext): Observable<string> {
    return this.rolesRegisterRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `rolesGetById()` */
  static readonly RolesGetByIdPath = '/api/roles/{id}';

  /**
   * Get role details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetById$Response(params: RolesGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return rolesGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get role details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetById(params: RolesGetById$Params, context?: HttpContext): Observable<RoleDto> {
    return this.rolesGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `rolesDelete()` */
  static readonly RolesDeletePath = '/api/roles/{id}';

  /**
   * Delete a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesDelete$Response(params: RolesDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return rolesDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a role.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesDelete(params: RolesDelete$Params, context?: HttpContext): Observable<string> {
    return this.rolesDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `rolesGetByIdWithPermissions()` */
  static readonly RolesGetByIdWithPermissionsPath = '/api/roles/{id}/permissions';

  /**
   * Get role details with its permissions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesGetByIdWithPermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetByIdWithPermissions$Response(params: RolesGetByIdWithPermissions$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return rolesGetByIdWithPermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Get role details with its permissions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesGetByIdWithPermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rolesGetByIdWithPermissions(params: RolesGetByIdWithPermissions$Params, context?: HttpContext): Observable<RoleDto> {
    return this.rolesGetByIdWithPermissions$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `rolesUpdatePermissions()` */
  static readonly RolesUpdatePermissionsPath = '/api/roles/{id}/permissions';

  /**
   * Update a role's permissions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rolesUpdatePermissions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesUpdatePermissions$Response(params: RolesUpdatePermissions$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return rolesUpdatePermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a role's permissions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rolesUpdatePermissions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rolesUpdatePermissions(params: RolesUpdatePermissions$Params, context?: HttpContext): Observable<string> {
    return this.rolesUpdatePermissions$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
