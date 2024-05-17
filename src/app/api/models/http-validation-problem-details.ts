/* tslint:disable */
/* eslint-disable */
import { ProblemDetails } from '../models/problem-details';
export type HttpValidationProblemDetails = ProblemDetails & {
'errors'?: {
[key: string]: Array<string>;
};
[key: string]: any | null;
};
