import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Film1PageRoutingModule } from './film1-routing.module';

import { Film1Page } from './film1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Film1PageRoutingModule
  ],
  declarations: [Film1Page]
})
export class Film1PageModule {}
