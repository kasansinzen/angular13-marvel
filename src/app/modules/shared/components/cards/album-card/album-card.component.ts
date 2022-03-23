import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() image: string = "";
  @Input() name: string = "";
  @Input() description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
