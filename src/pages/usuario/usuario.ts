import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams,ViewController,  ModalController} from "ionic-angular";
import { TakePicturePage } from "../take-picture/take-picture";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { BrMaskerIonic3 } from "brmasker-ionic-3";

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-usuario",
  templateUrl: "usuario.html",
  providers: [BrMaskerIonic3]
})
export class UsuarioPage {
  cpf: String;
  public photo: string = "";
  public form: FormGroup;
  
  constructor(private fb: FormBuilder,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public brMaskerIonic3: BrMaskerIonic3

  ) {
    this.cpf = this.navParams.get("cpf");
    this.photo = this.navParams.get("photo");
    
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(255),
        Validators.required
      ])],
      cpf: ['', Validators.compose([
        Validators.minLength(14),
         Validators.maxLength(14),
        Validators.required
      ])],
      dataNascimento: ['', Validators.compose([
        Validators.required
      ])],
      celular: ['', Validators.compose([
        Validators.minLength(15),
        Validators.maxLength(15),
        Validators.required
      ])],
      telefone: ['', Validators.compose([])],
      sms: ['', Validators.compose([
        Validators.required
      ])]
    });
    //alert(this.cpf);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UsuarioPage");
  }

  close() {
    this.viewCtrl.dismiss();
  }

  showSendPhoto() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create('TakePicturePage');
    modal.present();
  }

  submit() {
      localStorage.setItem('user',JSON.stringify(this.form.value));
      alert('SALVO COM SUCESSO');
      this.viewCtrl.dismiss();
  }
}
