import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  template: `
    <ion-nav [root]="rootPage"></ion-nav>
  `,
})
export class RootNavPage {
  get rootPage() {
    return HomePage;
  }
}
