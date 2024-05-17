/* tslint:disable */
/* eslint-disable */
export interface Filter {
  field?: string | null;
  filters?: Array<Filter> | null;
  logic?: string | null;
  operator?: string | null;
  value?: any | null;
}
