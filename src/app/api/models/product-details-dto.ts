/* tslint:disable */
/* eslint-disable */
import { BrandDto } from '../models/brand-dto';
export interface ProductDetailsDto {
  brand?: BrandDto;
  description?: string | null;
  id?: string;
  imagePath?: string | null;
  name?: string;
  rate?: number;
}
