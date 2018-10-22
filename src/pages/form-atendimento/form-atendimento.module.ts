import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormAtendimentoPage } from './form-atendimento';
import { UsuarioPage } from '../usuario/usuario';

@NgModule({
  declarations: [
    FormAtendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormAtendimentoPage),
  ],
})
export class FormAtendimentoPageModule {}
