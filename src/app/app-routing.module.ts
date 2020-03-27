import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/de', pathMatch: 'full' },
  { path: 'de', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'fr',
    loadChildren: () => import('./fr/fr.module').then( m => m.FrPageModule)
  },
  {
    path: 'anleitung',
    loadChildren: () => import('./anleitung/anleitung.module').then( m => m.AnleitungPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
