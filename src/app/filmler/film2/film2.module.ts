import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Film2PageRoutingModule } from './film2-routing.module';

import { Film2Page } from './film2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Film2PageRoutingModule
  ],
  declarations: [Film2Page]
})
export class Film2PageModule {}
