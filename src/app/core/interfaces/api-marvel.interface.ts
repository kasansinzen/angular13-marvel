export interface IApiMarvelResponse <T = any> {
  code: number;
  status: string;
  etag: string;
  data: T;
}

export interface IMasterItemResult {
  available: number;
  collectionURI: string;
  items: ItemResult[];
  returned: number;
}

export type ItemResult = {resourceURI: string, name: string};
export type UrlResult = {resourceURI: string, name: string};