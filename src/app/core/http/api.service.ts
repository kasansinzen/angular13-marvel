import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../interfaces/api-marvel.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getCharacters() {
    return this.http.get<IApiResponse>(`https://gateway.marvel.com:443/v1/public/characters`)
  }
}
