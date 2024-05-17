/* tslint:disable */
/* eslint-disable */
import { ChartSeries } from '../models/chart-series';
export interface StatsDto {
  brandCount?: number;
  dataEnterBarChart?: Array<ChartSeries>;
  productByBrandTypePieChart?: ({
[key: string]: number;
}) | null;
  productCount?: number;
  roleCount?: number;
  userCount?: number;
}
