import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'deneme',
    loadChildren: () => import('./deneme/deneme.module').then( m => m.DenemePageModule)
  },
  {
    path: 'film1',
    loadChildren: () => import('./filmler/film1/film1.module').then( m => m.Film1PageModule)
  },
  {
    path: 'film2',
    loadChildren: () => import('./filmler/film2/film2.module').then( m => m.Film2PageModule)
  },
  {
    path: 'film3',
    loadChildren: () => import('./filmler/film3/film3.module').then( m => m.Film3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
