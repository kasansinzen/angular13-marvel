import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { ICharacterRequest, ICharacterResult } from 'src/app/core/interfaces/api-character.interface';
import { MarvelPerpageRequest } from 'src/app/core/interfaces/api-marvel.interface';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  public isLoadingLoadmore: boolean = false;
  public resultCharacters: ICharacterResult[] = [];
  public totalCharacters: number = 0;
  public makeCardLoading: any[] = new Array(3).fill(null);
  public defaultConfigPerPage: MarvelPerpageRequest = {offset: 0, limit: 20};
  public configPerpage: {offset: number, limit: number} = this.defaultConfigPerPage;
  public requestCharacter: ICharacterRequest = {};

  private charactersSub?: Subscription;

  public formSearch: FormGroup = this.formBuilder.group({
    keyword: new FormControl("")
  })

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.characterService.getCharacters(this.requestCharacter);
    this.charactersSub = this.characterService.getCharactersUpdateListener().subscribe(data => {
      this.resultCharacters = data.results;
      this.totalCharacters = data.total;
      this.isLoading = false;
      this.isLoadingLoadmore = false;
    });
  }

  ngOnDestroy() {
    this.charactersSub?.unsubscribe();
  }

  handleSubmitSearch(event: SubmitEvent) {
    this.isLoading = true;
    this.characterService.getCharacters({nameStartsWith: this.formSearch.get('keyword')?.value || "", ...this.defaultConfigPerPage});
  }

  handleScrolled() {
    if(this.isLoadingLoadmore || this.configPerpage.offset > this.totalCharacters) return;
    this.isLoadingLoadmore = true;
    this.configPerpage = {...this.configPerpage, offset: this.configPerpage.offset + 20};
    this.requestCharacter = {nameStartsWith: this.formSearch.get('keyword')?.value || "", ...this.configPerpage};
    this.characterService.getCharacters(this.requestCharacter, true);
  }
}
