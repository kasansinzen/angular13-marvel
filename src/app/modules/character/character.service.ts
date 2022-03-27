import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { ICharacterData, ICharacterRequest, ICharacterResult } from 'src/app/core/interfaces/api-character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private resultCharacters: ICharacterResult[] = [];
  private resultCharactersUpdated = new Subject<ICharacterData>();

  constructor(
    private apiService: ApiService
  ) { }

  getCharacters(request: ICharacterRequest, isLoadmore: boolean = false) {
    this.apiService.getCharacters(request).pipe(map(result => result.data)).subscribe(data => {
      if(isLoadmore) this.resultCharacters = [...this.resultCharacters, ...data.results];
      else this.resultCharacters = data.results;
      
      this.resultCharactersUpdated.next({...data, results: this.resultCharacters});
    })
  }

  getCharactersUpdateListener() {
    return this.resultCharactersUpdated.asObservable();
  }
}
