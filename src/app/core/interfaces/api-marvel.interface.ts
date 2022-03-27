export interface IApiMarvelResponse <T = any> {
  code: number;
  status: string;
  etag: string;
  data: T;
}

export interface IApiMarvelDataResponse <T = any[]> {
  ount: number;
  limit: number;
  offset: number;
  results: T;
  total: number;
}

export interface IMasterItemResult {
  available: number;
  collectionURI: string;
  items: ItemResult[];
  returned: number;
}

export type MarvelPerpageRequest = {offset: number, limit: number};
export type ItemResult = {resourceURI: string, name: string};
export type UrlResult = {type: string, url: string};