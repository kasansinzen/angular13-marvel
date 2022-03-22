import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  public isLoading: boolean = false;
  public resultCharacters: any[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.handleGetCharacters();
  }

  handleGetCharacters() {
    this.isLoading = true;
    this.apiService.getCharacters().subscribe(result => {
      this.resultCharacters = result.data.results;
      this.isLoading = false;
    })
  }
}
