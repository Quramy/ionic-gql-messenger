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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const latestMessages = gql`
fragment MsgDetail on Message {
  id, createdAt, body, updatedAt, createdAt,
  author {
    id, name, avatar
  }
}
query LatestMessages {
  allMessages(last: 20, orderBy: createdAt_DESC) {
    ...MsgDetail,
  }
}`;

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
      <ng-container *ngIf="message$">
        <ion-card *ngFor="let message of message$ | async">
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
export class ContactPage implements OnInit, OnDestroy {

  me: UserSummaryFragment;
  subscription = new Subscription();
  message$: Observable<MsgDetailFragment[]>;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private apollo: Apollo,
  ) {
  }

  openModal() {
    const modal = this.modalCtrl.create(NewMessageModal, { author: this.me });
    modal.onDidDismiss(x => console.log(x));
    modal.present();
  }

  ngOnInit() {
    this.me = this.navParams.get('user');
    const latestMessages$ = this.apollo.query<LatestMessagesQuery>({ query: latestMessages, fetchPolicy: 'network-only' });
    const subject = new BehaviorSubject<AddMessageSubscription>(null);
    const addMessage$ = this.apollo.subscribe({ query: onAddMessage }) as Observable<AddMessageSubscription>;
    latestMessages$.map(msgs => msgs.data.allMessages).take(1).toPromise().then(messages => {
      this.message$ = subject.map(x => x && x.Message.node).scan((acc, message) => {
        return message ? [message, ...acc] : acc;
      }, messages);
    });
    this.subscription.add(addMessage$.subscribe(x => subject.next(x)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
      const createdId = x.data.createMessage.id;
      this.viewCtrl.dismiss({
        author: this.navParams.get('author'),
        body: this.text,
      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
