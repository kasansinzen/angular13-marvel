import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent,
    children: [
      {path: '', component: ListCharactersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
