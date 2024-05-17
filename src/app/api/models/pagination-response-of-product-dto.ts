/* tslint:disable */
/* eslint-disable */
import { ProductDto } from '../models/product-dto';
export interface PaginationResponseOfProductDto {
  currentPage?: number;
  data?: Array<ProductDto>;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  pageSize?: number;
  totalCount?: number;
  totalPages?: number;
}
