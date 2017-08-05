import { Component, ViewChild } from '@angular/core';
import {
  Platform,
  NavParams,
  ViewController,
  TextInput
} from 'ionic-angular';
import gql from 'graphql-tag';
import { GqlClient } from '../../graphql';

@Component({
  selector: 'new-message-modal',
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary">Cancel</span>
        </button>
      </ion-buttons>
      <ion-title>New Message</ion-title>
      <ion-buttons end>
        <button ion-button (click)="submit()">
          <span ion-text color="primary">Submit</span>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-textarea #message [(ngModel)]="text"></ion-textarea>
  </ion-content>
  `
})
export class NewMessageModal {

  @ViewChild('message') textArea: TextInput;
  text: string = "";

  constructor(
    private gqlClient: GqlClient,
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) { }

  ionViewDidLoad() {
    setTimeout(() => this.textArea.setFocus(), 200);
  }

  submit() {
    if (!this.text.length) return;
    this.gqlClient.postNewMessage({
      authorId: this.navParams.get('author').id || null,
      body: this.text,
    }).first().subscribe(x => {
      const id = x.data.createMessage.id;
      this.viewCtrl.dismiss({
        id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        body: this.text,
        author: this.navParams.get('author'),
      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
