import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { UsuarioPage } from './usuario';
import { BrMaskerModule } from 'brmasker-ionic-3';
 
@NgModule({
    declarations: [
      UsuarioPage,
    ],
    imports: [
      BrMaskerModule,
      IonicPageModule.forChild(UsuarioPage),
    ],
    exports: [
      UsuarioPage
    ],
   
  })
  export class LoginPageModule {}
