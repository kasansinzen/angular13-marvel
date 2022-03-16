import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../interfaces/api-marvel.interface';
import md5 from "md5";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private publicKey = environment.marvel_key.public;
  private privateKey = environment.marvel_key.private;
  private defaultRequest = {ts: 1, apikey: this.publicKey, hash: md5(`${1}${this.privateKey}${this.publicKey}`)}

  constructor(
    private http: HttpClient
  ) { }

  public getCharacters() {
    return this.http.get<IApiResponse>(`https://gateway.marvel.com:443/v1/public/characters`, {params: this.defaultRequest})
  }
}
