import { IApiMarvelDataResponse, IMasterItemResult, UrlResult } from "./api-marvel.interface";

export interface ICharacterData extends IApiMarvelDataResponse<ICharacterResult[]> { }
export interface ICharacterResult {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: {path: string, extension: string};
  resourceURI: string;
  comics: IMasterItemResult;
  series: IMasterItemResult;
  stories: IMasterItemResult;
  events: IMasterItemResult;
  urls: UrlResult[];
}

export interface ICharacterRequest {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: Date;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: "name" | "modified" | "-name" | "-modified";
  limit?: number;
  offset?: number;
}