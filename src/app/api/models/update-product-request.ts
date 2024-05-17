/* tslint:disable */
/* eslint-disable */
import { FileUploadRequest } from '../models/file-upload-request';
export interface UpdateProductRequest {
  brandId: string;
  deleteCurrentImage?: boolean;
  description?: string | null;
  id?: string;
  image?: FileUploadRequest | null;
  name: string;
  rate?: number;
}
