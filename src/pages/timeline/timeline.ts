import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  NavController,
  ModalController,
  Platform,
  NavParams,
} from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
              <ion-icon name="contact" [style.color]="'#F0F0F0'" [style.fontSize.px]="38" *ngIf="!message.author.avatar"></ion-icon>
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
export class TimelinePage implements OnInit, OnDestroy {

  me: UserSummaryFragment;
  subscription = new Subscription();
  addedMessage$ = new BehaviorSubject<MsgDetailFragment>(null);
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
    const latestMessages$ = this.gqlClient.queryLatestMessages();
    const addMessage$ = this.gqlClient.subscribeNewMessage();
    latestMessages$
      .map(msgs => msgs.data.allMessages)
      .take(1).toPromise().then(messages => {
        this.messages$ = this.addedMessage$.asObservable()
          .distinct(x => x && x.id)
          .scan((acc, message) => message ? [message, ...acc] : acc, messages)
        ;
      })
    ;
    this.subscription.add(addMessage$.subscribe(({ Message })=> this.addedMessage$.next(Message.node)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openModal() {
    const modal = this.modalCtrl.create(NewMessageModal, { author: this.me });
    modal.onDidDismiss(message => this.addedMessage$.next(message));
    modal.present();
  }

}
