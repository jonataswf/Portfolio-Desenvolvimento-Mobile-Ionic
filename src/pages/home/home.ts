import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {

  }

  showToast(linha: number) {
    let msg: string;

    switch (linha) {
      case 1:
        msg = "Git";
        break;

      case 2:
        msg = "Snapchat";
        break;

      case 3:
        msg = "Skype";
        break;

      case 4:
        msg = "Facebook";
        break;

      case 5:
        msg = "Whatsapp";
        break;

      default:
        msg = " ";
        break;
    }

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom"
    });
    toast.present(toast);
  }
}
