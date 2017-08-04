import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>login</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button (click)="login()">aaaaaaaaaaaa</button>
    </ion-content>
  `,
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
