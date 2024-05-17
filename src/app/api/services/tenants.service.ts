/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { TenantDto } from '../models/tenant-dto';
import { tenantsActivate } from '../fn/tenants/tenants-activate';
import { TenantsActivate$Params } from '../fn/tenants/tenants-activate';
import { tenantsCreate } from '../fn/tenants/tenants-create';
import { TenantsCreate$Params } from '../fn/tenants/tenants-create';
import { tenantsDeactivate } from '../fn/tenants/tenants-deactivate';
import { TenantsDeactivate$Params } from '../fn/tenants/tenants-deactivate';
import { tenantsGet } from '../fn/tenants/tenants-get';
import { TenantsGet$Params } from '../fn/tenants/tenants-get';
import { tenantsGetList } from '../fn/tenants/tenants-get-list';
import { TenantsGetList$Params } from '../fn/tenants/tenants-get-list';
import { tenantsUpgradeSubscription } from '../fn/tenants/tenants-upgrade-subscription';
import { TenantsUpgradeSubscription$Params } from '../fn/tenants/tenants-upgrade-subscription';

@Injectable({ providedIn: 'root' })
export class TenantsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tenantsGetList()` */
  static readonly TenantsGetListPath = '/api/tenants';

  /**
   * Get a list of all tenants.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetList$Response(params?: TenantsGetList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TenantDto>>> {
    return tenantsGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a list of all tenants.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetList(params?: TenantsGetList$Params, context?: HttpContext): Observable<Array<TenantDto>> {
    return this.tenantsGetList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TenantDto>>): Array<TenantDto> => r.body)
    );
  }

  /** Path part for operation `tenantsCreate()` */
  static readonly TenantsCreatePath = '/api/tenants';

  /**
   * Create a new tenant.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantsCreate$Response(params: TenantsCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return tenantsCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new tenant.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantsCreate(params: TenantsCreate$Params, context?: HttpContext): Observable<string> {
    return this.tenantsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `tenantsGet()` */
  static readonly TenantsGetPath = '/api/tenants/{id}';

  /**
   * Get tenant details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGet$Response(params: TenantsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<TenantDto>> {
    return tenantsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get tenant details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGet(params: TenantsGet$Params, context?: HttpContext): Observable<TenantDto> {
    return this.tenantsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<TenantDto>): TenantDto => r.body)
    );
  }

  /** Path part for operation `tenantsActivate()` */
  static readonly TenantsActivatePath = '/api/tenants/{id}/activate';

  /**
   * Activate a tenant.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsActivate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsActivate$Response(params: TenantsActivate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return tenantsActivate(this.http, this.rootUrl, params, context);
  }

  /**
   * Activate a tenant.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsActivate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsActivate(params: TenantsActivate$Params, context?: HttpContext): Observable<string> {
    return this.tenantsActivate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `tenantsDeactivate()` */
  static readonly TenantsDeactivatePath = '/api/tenants/{id}/deactivate';

  /**
   * Deactivate a tenant.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsDeactivate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsDeactivate$Response(params: TenantsDeactivate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return tenantsDeactivate(this.http, this.rootUrl, params, context);
  }

  /**
   * Deactivate a tenant.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsDeactivate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsDeactivate(params: TenantsDeactivate$Params, context?: HttpContext): Observable<string> {
    return this.tenantsDeactivate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `tenantsUpgradeSubscription()` */
  static readonly TenantsUpgradeSubscriptionPath = '/api/tenants/{id}/upgrade';

  /**
   * Upgrade a tenant's subscription.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsUpgradeSubscription()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantsUpgradeSubscription$Response(params: TenantsUpgradeSubscription$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return tenantsUpgradeSubscription(this.http, this.rootUrl, params, context);
  }

  /**
   * Upgrade a tenant's subscription.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsUpgradeSubscription$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantsUpgradeSubscription(params: TenantsUpgradeSubscription$Params, context?: HttpContext): Observable<string> {
    return this.tenantsUpgradeSubscription$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
