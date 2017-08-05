import { Component, OnInit } from '@angular/core';
import {
  NavController,
  ModalController,
  Platform,
  NavParams,
} from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NewMessageModal } from '../../modals/new-message/new-message';
import { GqlClient } from '../../graphql';
import { UserSummaryFragment, MsgDetailFragment } from '../../graphql/types';

@Component({
  selector: 'page-contact',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Timeline</ion-title>
        <ion-buttons end>
          <button ion-button (click)="openModal()">
            <span ion-text color="primary">Add</span>
          </button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ng-container *ngIf="messages$">
        <ion-card *ngFor="let message of messages$ | async">
          <ion-item *ngIf="message.author">
            <ion-avatar item-start>
              <img [src]="message.author.avatar" *ngIf="message.author?.avatar">
              <ion-icon name="contact" [style.color]="'#F0F0F0'" [style.fontSize.px]="42" *ngIf="!message.author.avatar"></ion-icon>
            </ion-avatar>
            <h3>{{message.author.name}}</h3>
          </ion-item>
          <ion-item *ngIf="!message.author">
            <ion-avatar item-start>
              <ion-icon name="ionitron" [style.color]="'#488aff'" [style.fontSize.px]="38"></ion-icon>
            </ion-avatar>
            <h3>(anonymous user)</h3>
          </ion-item>
          <ion-card-content>
            <p>{{message.body}}</p>
          </ion-card-content>
        </ion-card>
      </ng-container>
    </ion-content>
  `,
})
export class TimelinePage implements OnInit {

  me: UserSummaryFragment;
  ownMessage$ = new Subject<MsgDetailFragment>();
  messages$: Observable<MsgDetailFragment[]>;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private gqlClient: GqlClient,
  ) {
  }

  ngOnInit() {
    this.me = this.navParams.get('user');

    // 1. Queryで取得した既存メッセージをObservable<MsgDetailFragment>へ変換
    const latestMessage$ = this.gqlClient.queryLatestMessages()
      .flatMap(({ data }) => Observable.from(data.allMessages));

    // 2. Mutationによる自分で書いたメッセージのStream
    const ownMessage$ = this.ownMessage$.asObservable();

    // 3. Subscriptionによる新着メッセージをObservable<MsgDetailFragment>へ変換
    const addMessage$ = this.gqlClient.subscribeNewMessage().map(({ Message }) => Message.node);

    // 4. 上記をmergeし、scan
    this.messages$ = Observable.merge(latestMessage$, ownMessage$, addMessage$)
      .distinct(({ id }) => id).scan((acc, message) => [message, ...acc], []);
  }

  openModal() {
    const modal = this.modalCtrl.create(NewMessageModal, { author: this.me });
    modal.onDidDismiss(message => this.ownMessage$.next(message));
    modal.present();
  }

}
