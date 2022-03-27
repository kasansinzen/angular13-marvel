import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() image: string = "";
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() url: string = "";
  @Input() date?: Date;

  formatDate: string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.date) this.formatDate = moment(this.date, "YYYYMMDD").fromNow();
  }

}
