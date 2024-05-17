/* tslint:disable */
/* eslint-disable */
import { Filter } from '../models/filter';
import { Search } from '../models/search';
export interface BaseFilter {

  /**
   * Advanced column filtering with logical operators and query operators is supported.
   */
  advancedFilter?: Filter | null;

  /**
   * Column Wise Search is Supported.
   */
  advancedSearch?: Search | null;

  /**
   * Keyword to Search in All the available columns of the Resource.
   */
  keyword?: string | null;
}
