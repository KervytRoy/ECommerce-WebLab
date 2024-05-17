/* tslint:disable */
/* eslint-disable */
import { BaseFilter } from '../models/base-filter';
export type PaginationFilter = BaseFilter & {
'pageNumber'?: number;
'pageSize'?: number;
'orderBy'?: Array<string> | null;
};
