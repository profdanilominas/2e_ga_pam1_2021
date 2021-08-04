import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'detalhes/:indice', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
