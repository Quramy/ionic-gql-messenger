import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  template: `
    <ion-nav [root]="rootPage"></ion-nav>
  `,
})
export class TabsPage {
  get rootPage() {
    return HomePage;
  }

  constructor() {

  }
}
