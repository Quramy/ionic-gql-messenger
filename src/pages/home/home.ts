import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { TimelinePage } from '../timeline/timeline';
import { GqlClient } from '../../graphql';
import { UserSummaryFragment } from '../../graphql/types';

@Component({
  selector: 'page-home',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>だれ？</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <button ion-item *ngFor="let user of users$ | async" (click)="selectUser(user)">
          <ion-avatar>
            <img [src]="user.avatar" *ngIf="user.avatar">
            <ion-icon name="contact" [style.color]="'#F0F0F0'" [style.fontSize.px]="38" *ngIf="!user.avatar"></ion-icon>
            <span class="name">{{user.name}}</span>
          </ion-avatar>
        </button>
      </ion-list>
    </ion-content>
  `,
})
export class HomePage {

  users$: Observable<UserSummaryFragment[]>;

  constructor(
    public navCtrl: NavController,
    private gqlClient: GqlClient,
  ) {
    this.users$ = this.gqlClient.queryUsers().map(({ data }) => data.allUsers);
  }

  selectUser(user: UserSummaryFragment) {
    this.navCtrl.push(TimelinePage, { user });
  }
}
