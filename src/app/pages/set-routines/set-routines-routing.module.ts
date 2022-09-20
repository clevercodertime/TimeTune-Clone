import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetRoutinesPage } from './set-routines.page';

const routes: Routes = [
  {
    path: '',
    component: SetRoutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetRoutinesPageRoutingModule {}
