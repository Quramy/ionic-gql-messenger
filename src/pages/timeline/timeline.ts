import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {
  NavController,
  ModalController,
  Platform,
  NavParams,
  ViewController,
  TextInput
} from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AddMessageSubscription, LatestMessagesQuery, PostMessageMutation, PostMessageMutationVariables, MsgDetailFragment, UserSummaryFragment } from '../../__generated__';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// 直近40件のメッセージを取得するクエリ
const latestMessages = gql`
fragment MsgDetail on Message {
  id, createdAt, body, updatedAt, createdAt,
  author {
    id, name, avatar
  }
}

query LatestMessages {
  allMessages(last: 40, orderBy: createdAt_DESC) {
    ...MsgDetail,
  }
}`;

// メッセージを書き込むmutation
const onAddMessage = gql`
subscription AddMessage {
  Message(
    filter: {}
  ) {
    mutation,
    node {
      id, createdAt, body, updatedAt, createdAt,
      author {
        id, name, avatar
      }
    }
  }
}`;

// メッセージの追加を監視するGraphQL Suscription
const postMessage = gql`
mutation PostMessage($body: String!, $authorId: ID) {
  createMessage(body: $body, authorId: $authorId) {
    id,
  }
}`;

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
    private apollo: Apollo,
  ) {
  }

  ngOnInit() {
    this.me = this.navParams.get('user');
    const latestMessages$ = this.apollo.query<LatestMessagesQuery>({ query: latestMessages, fetchPolicy: 'network-only' });
    const addMessage$ = this.apollo.subscribe({ query: onAddMessage }) as Observable<AddMessageSubscription>;
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
    private apollo: Apollo,
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) { }

  ionViewDidLoad() {
    setTimeout(() => this.textArea.setFocus(), 200);
  }

  submit() {
    if (!this.text.length) return;
    this.apollo.mutate<PostMessageMutation>({
      mutation: postMessage,
      variables: {
        authorId: this.navParams.get('author').id || null,
        body: this.text,
      } as PostMessageMutationVariables
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