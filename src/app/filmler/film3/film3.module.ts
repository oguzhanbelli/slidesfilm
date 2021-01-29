import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Film3PageRoutingModule } from './film3-routing.module';

import { Film3Page } from './film3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Film3PageRoutingModule
  ],
  declarations: [Film3Page]
})
export class Film3PageModule {}
