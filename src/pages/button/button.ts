import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-button',
  templateUrl: 'button.html',
})
export class ButtonPage {

  email: string = '';
  telefone: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonPage');
  }

  onClick() {
    let prompt = this.alertCtrl.create({
      title: 'Informe seus dados',
      message: "Digite seu email e telefone",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
        {
          name: 'telefone',
          placeholder: 'Telefone'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',

        },
        {
          text: 'Enviar',
          handler: data => {
            this.email = "Email: " + data.email;
            this.telefone = "Telefone: " + data.telefone;
          }
        }
      ]
    })
    prompt.present();
  }

}
