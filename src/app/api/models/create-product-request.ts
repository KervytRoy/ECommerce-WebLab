/* tslint:disable */
/* eslint-disable */
import { FileUploadRequest } from '../models/file-upload-request';
export interface CreateProductRequest {
  brandId: string;
  description?: string | null;
  image?: FileUploadRequest | null;
  name: string;
  rate?: number;
}
