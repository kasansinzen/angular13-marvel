import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/templates/header/header.component';
import { TemplatesComponent } from './components/templates/templates.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/templates/footer/footer.component';
import { CardLoadingComponent } from './components/loadings/card-loading/card-loading.component';
import { AlbumCardComponent } from './components/cards/album-card/album-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TemplatesComponent,
    FooterComponent,
    CardLoadingComponent,
    AlbumCardComponent
  ],
  exports: [
    TemplatesComponent,
    CardLoadingComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
