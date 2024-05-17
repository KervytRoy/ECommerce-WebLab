/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { UserDetailsDto } from '../models/user-details-dto';
import { UserRoleDto } from '../models/user-role-dto';
import { usersAssignRoles } from '../fn/users/users-assign-roles';
import { UsersAssignRoles$Params } from '../fn/users/users-assign-roles';
import { usersConfirmEmail } from '../fn/users/users-confirm-email';
import { UsersConfirmEmail$Params } from '../fn/users/users-confirm-email';
import { usersConfirmPhoneNumber } from '../fn/users/users-confirm-phone-number';
import { UsersConfirmPhoneNumber$Params } from '../fn/users/users-confirm-phone-number';
import { usersCreate } from '../fn/users/users-create';
import { UsersCreate$Params } from '../fn/users/users-create';
import { usersForgotPassword } from '../fn/users/users-forgot-password';
import { UsersForgotPassword$Params } from '../fn/users/users-forgot-password';
import { usersGetById } from '../fn/users/users-get-by-id';
import { UsersGetById$Params } from '../fn/users/users-get-by-id';
import { usersGetList } from '../fn/users/users-get-list';
import { UsersGetList$Params } from '../fn/users/users-get-list';
import { usersGetRoles } from '../fn/users/users-get-roles';
import { UsersGetRoles$Params } from '../fn/users/users-get-roles';
import { usersResetPassword } from '../fn/users/users-reset-password';
import { UsersResetPassword$Params } from '../fn/users/users-reset-password';
import { usersSelfRegister } from '../fn/users/users-self-register';
import { UsersSelfRegister$Params } from '../fn/users/users-self-register';
import { usersToggleStatus } from '../fn/users/users-toggle-status';
import { UsersToggleStatus$Params } from '../fn/users/users-toggle-status';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersGetList()` */
  static readonly UsersGetListPath = '/api/users';

  /**
   * Get list of all users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetList$Response(params?: UsersGetList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserDetailsDto>>> {
    return usersGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Get list of all users.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetList(params?: UsersGetList$Params, context?: HttpContext): Observable<Array<UserDetailsDto>> {
    return this.usersGetList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserDetailsDto>>): Array<UserDetailsDto> => r.body)
    );
  }

  /** Path part for operation `usersCreate()` */
  static readonly UsersCreatePath = '/api/users';

  /**
   * Creates a new user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersCreate$Response(params: UsersCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return usersCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Creates a new user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersCreate(params: UsersCreate$Params, context?: HttpContext): Observable<string> {
    return this.usersCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `usersGetById()` */
  static readonly UsersGetByIdPath = '/api/users/{id}';

  /**
   * Get a user's details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetById$Response(params: UsersGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDetailsDto>> {
    return usersGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a user's details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetById(params: UsersGetById$Params, context?: HttpContext): Observable<UserDetailsDto> {
    return this.usersGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDetailsDto>): UserDetailsDto => r.body)
    );
  }

  /** Path part for operation `usersGetRoles()` */
  static readonly UsersGetRolesPath = '/api/users/{id}/roles';

  /**
   * Get a user's roles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetRoles$Response(params: UsersGetRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserRoleDto>>> {
    return usersGetRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a user's roles.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetRoles(params: UsersGetRoles$Params, context?: HttpContext): Observable<Array<UserRoleDto>> {
    return this.usersGetRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserRoleDto>>): Array<UserRoleDto> => r.body)
    );
  }

  /** Path part for operation `usersAssignRoles()` */
  static readonly UsersAssignRolesPath = '/api/users/{id}/roles';

  /**
   * Update a user's assigned roles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersAssignRoles()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersAssignRoles$Response(params: UsersAssignRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return usersAssignRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a user's assigned roles.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersAssignRoles$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersAssignRoles(params: UsersAssignRoles$Params, context?: HttpContext): Observable<string> {
    return this.usersAssignRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `usersSelfRegister()` */
  static readonly UsersSelfRegisterPath = '/api/users/self-register';

  /**
   * Anonymous user creates a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersSelfRegister()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersSelfRegister$Response(params: UsersSelfRegister$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return usersSelfRegister(this.http, this.rootUrl, params, context);
  }

  /**
   * Anonymous user creates a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersSelfRegister$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersSelfRegister(params: UsersSelfRegister$Params, context?: HttpContext): Observable<string> {
    return this.usersSelfRegister$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `usersToggleStatus()` */
  static readonly UsersToggleStatusPath = '/api/users/{id}/toggle-status';

  /**
   * Toggle a user's active status.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersToggleStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersToggleStatus$Response(params: UsersToggleStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersToggleStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * Toggle a user's active status.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersToggleStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersToggleStatus(params: UsersToggleStatus$Params, context?: HttpContext): Observable<void> {
    return this.usersToggleStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersConfirmEmail()` */
  static readonly UsersConfirmEmailPath = '/api/users/confirm-email';

  /**
   * Confirm email address for a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersConfirmEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersConfirmEmail$Response(params?: UsersConfirmEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return usersConfirmEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm email address for a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersConfirmEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersConfirmEmail(params?: UsersConfirmEmail$Params, context?: HttpContext): Observable<string> {
    return this.usersConfirmEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `usersConfirmPhoneNumber()` */
  static readonly UsersConfirmPhoneNumberPath = '/api/users/confirm-phone-number';

  /**
   * Confirm phone number for a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersConfirmPhoneNumber()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersConfirmPhoneNumber$Response(params?: UsersConfirmPhoneNumber$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return usersConfirmPhoneNumber(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm phone number for a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersConfirmPhoneNumber$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersConfirmPhoneNumber(params?: UsersConfirmPhoneNumber$Params, context?: HttpContext): Observable<string> {
    return this.usersConfirmPhoneNumber$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `usersForgotPassword()` */
  static readonly UsersForgotPasswordPath = '/api/users/forgot-password';

  /**
   * Request a password reset email for a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersForgotPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersForgotPassword$Response(params: UsersForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return usersForgotPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Request a password reset email for a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersForgotPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersForgotPassword(params: UsersForgotPassword$Params, context?: HttpContext): Observable<string> {
    return this.usersForgotPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `usersResetPassword()` */
  static readonly UsersResetPasswordPath = '/api/users/reset-password';

  /**
   * Reset a user's password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersResetPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersResetPassword$Response(params: UsersResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return usersResetPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Reset a user's password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersResetPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersResetPassword(params: UsersResetPassword$Params, context?: HttpContext): Observable<string> {
    return this.usersResetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
