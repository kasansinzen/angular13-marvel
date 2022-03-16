export interface IApiResponse <T = any> {
  code: number;
  status: string;
  etag: string;
  data: T;
}