import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { FormAtendimentoPage } from './form-atendimento';
import { BrMaskerModule } from 'brmasker-ionic-3';
 
@NgModule({
    declarations: [
      FormAtendimentoPage,
    ],
    imports: [
      BrMaskerModule,
      IonicPageModule.forChild(FormAtendimentoPage),
    ],
    exports: [
      FormAtendimentoPage
    ],
   
  })
  export class LoginPageModule {}
