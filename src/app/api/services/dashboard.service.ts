/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { dashboardGet } from '../fn/dashboard/dashboard-get';
import { DashboardGet$Params } from '../fn/dashboard/dashboard-get';
import { StatsDto } from '../models/stats-dto';

@Injectable({ providedIn: 'root' })
export class DashboardService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `dashboardGet()` */
  static readonly DashboardGetPath = '/api/v1/dashboard';

  /**
   * Get statistics for the dashboard.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGet$Response(params?: DashboardGet$Params, context?: HttpContext): Observable<StrictHttpResponse<StatsDto>> {
    return dashboardGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get statistics for the dashboard.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dashboardGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGet(params?: DashboardGet$Params, context?: HttpContext): Observable<StatsDto> {
    return this.dashboardGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>): StatsDto => r.body)
    );
  }

}
