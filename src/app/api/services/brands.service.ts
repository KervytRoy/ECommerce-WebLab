/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BrandDto } from '../models/brand-dto';
import { brandsCreate } from '../fn/brands/brands-create';
import { BrandsCreate$Params } from '../fn/brands/brands-create';
import { brandsDelete } from '../fn/brands/brands-delete';
import { BrandsDelete$Params } from '../fn/brands/brands-delete';
import { brandsDeleteRandom } from '../fn/brands/brands-delete-random';
import { BrandsDeleteRandom$Params } from '../fn/brands/brands-delete-random';
import { brandsGenerateRandom } from '../fn/brands/brands-generate-random';
import { BrandsGenerateRandom$Params } from '../fn/brands/brands-generate-random';
import { brandsGet } from '../fn/brands/brands-get';
import { BrandsGet$Params } from '../fn/brands/brands-get';
import { brandsSearch } from '../fn/brands/brands-search';
import { BrandsSearch$Params } from '../fn/brands/brands-search';
import { brandsUpdate } from '../fn/brands/brands-update';
import { BrandsUpdate$Params } from '../fn/brands/brands-update';
import { PaginationResponseOfBrandDto } from '../models/pagination-response-of-brand-dto';

@Injectable({ providedIn: 'root' })
export class BrandsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `brandsSearch()` */
  static readonly BrandsSearchPath = '/api/v1/brands/search';

  /**
   * Search brands using available filters.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `brandsSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsSearch$Response(params: BrandsSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginationResponseOfBrandDto>> {
    return brandsSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Search brands using available filters.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `brandsSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsSearch(params: BrandsSearch$Params, context?: HttpContext): Observable<PaginationResponseOfBrandDto> {
    return this.brandsSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginationResponseOfBrandDto>): PaginationResponseOfBrandDto => r.body)
    );
  }

  /** Path part for operation `brandsGet()` */
  static readonly BrandsGetPath = '/api/v1/brands/{id}';

  /**
   * Get brand details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `brandsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  brandsGet$Response(params: BrandsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<BrandDto>> {
    return brandsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get brand details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `brandsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  brandsGet(params: BrandsGet$Params, context?: HttpContext): Observable<BrandDto> {
    return this.brandsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<BrandDto>): BrandDto => r.body)
    );
  }

  /** Path part for operation `brandsUpdate()` */
  static readonly BrandsUpdatePath = '/api/v1/brands/{id}';

  /**
   * Update a brand.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `brandsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsUpdate$Response(params: BrandsUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return brandsUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a brand.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `brandsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsUpdate(params: BrandsUpdate$Params, context?: HttpContext): Observable<string> {
    return this.brandsUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `brandsDelete()` */
  static readonly BrandsDeletePath = '/api/v1/brands/{id}';

  /**
   * Delete a brand.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `brandsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  brandsDelete$Response(params: BrandsDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return brandsDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a brand.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `brandsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  brandsDelete(params: BrandsDelete$Params, context?: HttpContext): Observable<string> {
    return this.brandsDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `brandsCreate()` */
  static readonly BrandsCreatePath = '/api/v1/brands';

  /**
   * Create a new brand.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `brandsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsCreate$Response(params: BrandsCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return brandsCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new brand.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `brandsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsCreate(params: BrandsCreate$Params, context?: HttpContext): Observable<string> {
    return this.brandsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `brandsGenerateRandom()` */
  static readonly BrandsGenerateRandomPath = '/api/v1/brands/generate-random';

  /**
   * Generate a number of random brands.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `brandsGenerateRandom()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsGenerateRandom$Response(params: BrandsGenerateRandom$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return brandsGenerateRandom(this.http, this.rootUrl, params, context);
  }

  /**
   * Generate a number of random brands.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `brandsGenerateRandom$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  brandsGenerateRandom(params: BrandsGenerateRandom$Params, context?: HttpContext): Observable<string> {
    return this.brandsGenerateRandom$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `brandsDeleteRandom()` */
  static readonly BrandsDeleteRandomPath = '/api/v1/brands/delete-random';

  /**
   * Delete the brands generated with the generate-random call.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `brandsDeleteRandom()` instead.
   *
   * This method doesn't expect any request body.
   */
  brandsDeleteRandom$Response(params?: BrandsDeleteRandom$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return brandsDeleteRandom(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete the brands generated with the generate-random call.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `brandsDeleteRandom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  brandsDeleteRandom(params?: BrandsDeleteRandom$Params, context?: HttpContext): Observable<string> {
    return this.brandsDeleteRandom$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
