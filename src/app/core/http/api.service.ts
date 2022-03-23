import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiMarvelResponse } from '../interfaces/api-marvel.interface';
import { ICharacterData, ICharacterRequest } from '../interfaces/api-character.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private paramsHandler(request: {[key: string]: any}) {
    let params = new HttpParams();
    Object.entries(request).forEach(([key, value]) => {
      if(value) params = params.append(key, value);
    });

    return params;
  }

  public getCharacters(request: ICharacterRequest) {
    return this.http.get<IApiMarvelResponse<ICharacterData>>(`https://gateway.marvel.com:443/v1/public/characters`, {params: this.paramsHandler(request)})
  }
}
