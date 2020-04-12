import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list/card-list.component';

const routes: Routes = [
  {path: 'pokemons', component: CardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
