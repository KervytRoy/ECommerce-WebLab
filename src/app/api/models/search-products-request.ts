/* tslint:disable */
/* eslint-disable */
import { PaginationFilter } from '../models/pagination-filter';
export type SearchProductsRequest = PaginationFilter & {
'brandId'?: string | null;
'minimumRate'?: number | null;
'maximumRate'?: number | null;
};
