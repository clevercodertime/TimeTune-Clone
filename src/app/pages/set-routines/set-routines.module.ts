import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetRoutinesPageRoutingModule } from './set-routines-routing.module';

import { SetRoutinesPage } from './set-routines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetRoutinesPageRoutingModule
  ],
  declarations: [SetRoutinesPage]
})
export class SetRoutinesPageModule {}
