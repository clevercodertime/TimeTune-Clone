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
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'interface',
    loadChildren: () => import('./pages/interface/interface.module').then( m => m.InterfacePageModule)
  },
  {
    path: 'ionic',
    loadChildren: () => import('./pages/ionic/ionic.module').then( m => m.IonicPageModule)
  },
  {
    path: 'routine',
    loadChildren: () => import('./pages/routine/routine.module').then( m => m.RoutinePageModule)
  },
  {
    path: 'set-routines',
    loadChildren: () => import('./pages/set-routines/set-routines.module').then( m => m.SetRoutinesPageModule)
  },
  {
    path: 'blocks',
    loadChildren: () => import('./pages/blocks/blocks.module').then( m => m.BlocksPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/tags/tags.module').then( m => m.TagsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
