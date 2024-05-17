/* tslint:disable */
/* eslint-disable */
import { FileUploadRequest } from '../models/file-upload-request';
export interface UpdateUserRequest {
  deleteCurrentImage?: boolean;
  email: string;
  firstName: string;
  id: string;
  image?: FileUploadRequest | null;
  lastName: string;
  phoneNumber?: string | null;
}
