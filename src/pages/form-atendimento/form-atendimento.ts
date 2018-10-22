import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { LoadingController, AlertController } from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { UsuarioPage } from "../usuario/usuario";
import { BrMaskerIonic3, BrMaskModel } from 'brmasker-ionic-3';
import { CalendarPage } from '../calendar/calendar';

/**
 * Generated class for the FormAtendimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-form-atendimento",
  templateUrl: "form-atendimento.html",
  providers: [BrMaskerIonic3]

})
export class FormAtendimentoPage {
  public form: FormGroup;
  public today: String;
  public especialidade: String;
  public medico: String;
  public cpf: String;
  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
     public modalCtrl: ModalController,
     public brMaskerIonic3: BrMaskerIonic3
  ) {
   // this.today = new Date().toISOString();

    this.form = this.fb.group({
      titulo: [
        "",
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required
        ])
      ],
      dataConsulta: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      especialidade: [
        "",
        Validators.compose([
          Validators.minLength(1),
          Validators.required
        ])
      ],
      medico: [
        "",
        Validators.compose([
          Validators.minLength(1),
          Validators.required
        ])
      ],
      descricao: [
        ""
      ]
    });
  }

  
  searchUser() {
   // alert(this.cpf);
    let profileModal = this.modalCtrl.create(UsuarioPage, {
      cpf: this.cpf
    });
    profileModal.present();

    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
  }
  submit() {
    const loader = this.loadingCtrl.create({ content: "Cadastrando..." });
    loader.present();

    const alert = this.alertCtrl.create({
      title: "Ops, algo deu errado",
      subTitle: "Não foi possível realizar seu cadastro.",
      buttons: ["OK"]
    });

    localStorage.setItem('consulta',JSON.stringify(this.form.value));
    this.navCtrl.setRoot(CalendarPage);
    loader.dismiss();

  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad FormAtendimentoPage");
  }
  
  back()
  {
    this.navCtrl.pop();  // remember to put this to add the back button behavior
  }
}
