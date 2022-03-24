import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { ICharacterRequest, ICharacterResult } from 'src/app/core/interfaces/api-character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  public isLoading: boolean = false;
  public isLoadingLoadmore: boolean = false;
  public resultCharacters: ICharacterResult[] = [];
  public makeCardLoading: any[] = new Array(3).fill(null);
  public configPerpage: {offset: number, limit: number} = {offset: 0, limit: 20};
  public requestCharacter: ICharacterRequest = {};

  public formSearch: FormGroup = this.formBuilder.group({
    keyword: new FormControl("")
  })

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.handleGetCharacters();
  }

  requestCharacterHandler(request: ICharacterRequest): void {
    this.requestCharacter = {...this.requestCharacter, ...request}
  }

  handleGetCharacters(isLoadmore: boolean = false) {
    this.apiService.getCharacters(this.requestCharacter).subscribe(result => {
      const data = result.data.results || [];
      if(isLoadmore) this.resultCharacters = [...this.resultCharacters, ...data];
      else this.resultCharacters = data;
      
      this.isLoading = false;
      this.isLoadingLoadmore = false;
    })
  }

  handleSubmitSearch(event: SubmitEvent) {
    this.isLoading = true;
    this.requestCharacterHandler({
      nameStartsWith: this.formSearch.get('keyword')?.value || "",
      ...this.configPerpage
    });
    this.handleGetCharacters();
  }

  handleScrolled() {
    this.isLoadingLoadmore = true;
    this.configPerpage = {...this.configPerpage, offset: this.configPerpage.offset + 20};
    this.requestCharacterHandler({...this.configPerpage});
    this.handleGetCharacters(true);
  }
}
