/* tslint:disable */
/* eslint-disable */
import { BrandDto } from '../models/brand-dto';
export interface PaginationResponseOfBrandDto {
  currentPage?: number;
  data?: Array<BrandDto>;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  pageSize?: number;
  totalCount?: number;
  totalPages?: number;
}
