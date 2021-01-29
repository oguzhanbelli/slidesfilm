import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Film1Page } from './film1.page';

const routes: Routes = [
  {
    path: '',
    component: Film1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Film1PageRoutingModule {}
