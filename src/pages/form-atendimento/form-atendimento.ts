import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, DateTime } from "ionic-angular";
import { LoginPage } from "../login/login";
import { LoadingController, AlertController } from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
/**
 * Generated class for the FormAtendimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-form-atendimento",
  templateUrl: "form-atendimento.html"
})
export class FormAtendimentoPage {
  public form: FormGroup;
  public today: String;
  public gaming: String;
  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
   // this.today = new Date().toISOString();

    this.form = this.fb.group({
      email: [
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
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required
        ])
      ],
      medico: [
        "",
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required
        ])
      ],
      descricao: [
        ""
      ]
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
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad FormAtendimentoPage");
  }
}
