import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { ICharacterResult } from 'src/app/core/interfaces/api-character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  public isLoading: boolean = false;
  public resultCharacters: ICharacterResult[] = [];
  public makeCardLoading: any[] = new Array(3).fill(null);

  public formSearch: FormGroup = this.formBuilder.group({
    keyword: new FormControl("")
  })

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.handleGetCharacters();
  }

  handleGetCharacters(keyword: string = "") {
    this.isLoading = true;
    this.apiService.getCharacters({nameStartsWith: keyword}).subscribe(result => {
      this.resultCharacters = result.data.results;
      this.isLoading = false;
    })
  }

  handleSubmitSearch(event: SubmitEvent) {
    this.handleGetCharacters(this.formSearch.get('keyword')?.value || "");
  }
}
