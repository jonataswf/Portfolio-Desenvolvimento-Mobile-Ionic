import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BoasVindasPage } from '../boas-vindas/boas-vindas';

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  validarUsuario(campoUsuario: string, campoSenha: number) {
    let usuario: string = 'admin';
    let senha: number = 123;

    if (campoUsuario == usuario && campoSenha == senha) {
      this.navCtrl.push(BoasVindasPage);
    } else {
      const alert = this.alertCtrl.create({
        title: 'Acesso Negado',
        message: 'Senha ou usuário inválido!',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}

