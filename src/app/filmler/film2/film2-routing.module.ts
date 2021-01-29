import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Film2Page } from './film2.page';

const routes: Routes = [
  {
    path: '',
    component: Film2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Film2PageRoutingModule {}
