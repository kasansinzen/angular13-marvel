import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharacterComponent,
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
