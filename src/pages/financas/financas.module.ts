import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancasPage } from './financas';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    FinancasPage,
  ],
  imports: [
    ChartsModule,
    IonicPageModule.forChild(FinancasPage),
  ],
  exports: [
    FinancasPage
  ],
})
export class FinancasPageModule {}
