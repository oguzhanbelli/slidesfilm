import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Film3Page } from './film3.page';

const routes: Routes = [
  {
    path: '',
    component: Film3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Film3PageRoutingModule {}
