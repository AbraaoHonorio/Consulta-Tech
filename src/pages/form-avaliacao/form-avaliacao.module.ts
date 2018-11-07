import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormAvaliacaoPage } from './form-avaliacao';
import { Autosize } from '../../directives/autosize/autosize';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    FormAvaliacaoPage,
    Autosize
  ],
  imports: [
    ChartsModule,
    IonicPageModule.forChild(FormAvaliacaoPage),
  ],
  exports: [
    FormAvaliacaoPage
  ],
})
export class FormAvaliacaoPageModule {}
