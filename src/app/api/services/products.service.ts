/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginationResponseOfProductDto } from '../models/pagination-response-of-product-dto';
import { ProductDetailsDto } from '../models/product-details-dto';
import { ProductDto } from '../models/product-dto';
import { productsCreate } from '../fn/products/products-create';
import { ProductsCreate$Params } from '../fn/products/products-create';
import { productsDelete } from '../fn/products/products-delete';
import { ProductsDelete$Params } from '../fn/products/products-delete';
import { productsExport } from '../fn/products/products-export';
import { ProductsExport$Params } from '../fn/products/products-export';
import { productsGet } from '../fn/products/products-get';
import { ProductsGet$Params } from '../fn/products/products-get';
import { productsGetDapper } from '../fn/products/products-get-dapper';
import { ProductsGetDapper$Params } from '../fn/products/products-get-dapper';
import { productsSearch } from '../fn/products/products-search';
import { ProductsSearch$Params } from '../fn/products/products-search';
import { productsUpdate } from '../fn/products/products-update';
import { ProductsUpdate$Params } from '../fn/products/products-update';

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productsSearch()` */
  static readonly ProductsSearchPath = '/api/v1/products/search';

  /**
   * Search products using available filters.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsSearch$Response(params: ProductsSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginationResponseOfProductDto>> {
    return productsSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Search products using available filters.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsSearch(params: ProductsSearch$Params, context?: HttpContext): Observable<PaginationResponseOfProductDto> {
    return this.productsSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginationResponseOfProductDto>): PaginationResponseOfProductDto => r.body)
    );
  }

  /** Path part for operation `productsGet()` */
  static readonly ProductsGetPath = '/api/v1/products/{id}';

  /**
   * Get product details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsGet$Response(params: ProductsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDetailsDto>> {
    return productsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get product details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsGet(params: ProductsGet$Params, context?: HttpContext): Observable<ProductDetailsDto> {
    return this.productsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductDetailsDto>): ProductDetailsDto => r.body)
    );
  }

  /** Path part for operation `productsUpdate()` */
  static readonly ProductsUpdatePath = '/api/v1/products/{id}';

  /**
   * Update a product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsUpdate$Response(params: ProductsUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return productsUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsUpdate(params: ProductsUpdate$Params, context?: HttpContext): Observable<string> {
    return this.productsUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `productsDelete()` */
  static readonly ProductsDeletePath = '/api/v1/products/{id}';

  /**
   * Delete a product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsDelete$Response(params: ProductsDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return productsDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsDelete(params: ProductsDelete$Params, context?: HttpContext): Observable<string> {
    return this.productsDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `productsGetDapper()` */
  static readonly ProductsGetDapperPath = '/api/v1/products/dapper';

  /**
   * Get product details via dapper.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsGetDapper()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsGetDapper$Response(params?: ProductsGetDapper$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDto>> {
    return productsGetDapper(this.http, this.rootUrl, params, context);
  }

  /**
   * Get product details via dapper.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsGetDapper$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsGetDapper(params?: ProductsGetDapper$Params, context?: HttpContext): Observable<ProductDto> {
    return this.productsGetDapper$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductDto>): ProductDto => r.body)
    );
  }

  /** Path part for operation `productsCreate()` */
  static readonly ProductsCreatePath = '/api/v1/products';

  /**
   * Create a new product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsCreate$Response(params: ProductsCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return productsCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsCreate(params: ProductsCreate$Params, context?: HttpContext): Observable<string> {
    return this.productsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `productsExport()` */
  static readonly ProductsExportPath = '/api/v1/products/export';

  /**
   * Export a products.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsExport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsExport$Response(params: ProductsExport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return productsExport(this.http, this.rootUrl, params, context);
  }

  /**
   * Export a products.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsExport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsExport(params: ProductsExport$Params, context?: HttpContext): Observable<Blob> {
    return this.productsExport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
