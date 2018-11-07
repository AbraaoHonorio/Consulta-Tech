import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { ClientesPage } from './clientes';
import { ClientService } from '../../app/services/client-service.service';
 
@NgModule({
    declarations: [
        ClientesPage,
    ],
    imports: [
      IonicPageModule.forChild(ClientesPage),
    ],
    exports: [
        ClientesPage
    ],
    providers: [
        ClientService,
    ]
  })
  export class ClientesPageModule {}
