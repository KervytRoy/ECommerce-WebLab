/* tslint:disable */
/* eslint-disable */
import { BaseFilter } from '../models/base-filter';
export type ExportProductsRequest = BaseFilter & {
'brandId'?: string | null;
'minimumRate'?: number | null;
'maximumRate'?: number | null;
};
