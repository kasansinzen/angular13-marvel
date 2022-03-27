import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { ICharacterResult } from 'src/app/core/interfaces/api-character.interface';
import { IApiMarvelDataResponse } from 'src/app/core/interfaces/api-marvel.interface';

interface IObjectAny {[key: string]: any};

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  id: string = "";
  resultCharacter: ICharacterResult | null = null;
  resultModal: IObjectAny = {};

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || "";
  }

  ngOnInit(): void {
    this.apiService.getCharacterDetail(this.id).subscribe(result => {
      if(result.data.results?.length) this.resultCharacter = result.data.results[0];
    });
  }

  handleClickLoadMadal(resourceUri: string) {
    this.apiService.anyGetByUrl<IApiMarvelDataResponse>(resourceUri).subscribe(result => {
      const data = result.results;
      if(data && data?.length) this.resultModal = data[0];
    })
  }

}
