import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage, NewMessageModal } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { ApolloModule } from 'apollo-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { RootNavPage } from '../pages/root-nav/root-nav';

export const wsClient = new SubscriptionClient('wss://subscriptions.ap-northeast-1.graph.cool/v1/cj5w8vqez05b50105pzg1erpt', {
  reconnect: true,
});
export const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj5w8vqez05b50105pzg1erpt',
});

export const client = new ApolloClient({
  dataIdFromObject: (x: any) => x.id,
  networkInterface: addGraphQLSubscriptions(networkInterface, wsClient),
});

export function provideClient(): ApolloClient {
  return client;
}

export const cloudSettings: CloudSettings = {
  core: {
    app_id: '59554521',
  },
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    RootNavPage,
    NewMessageModal,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ApolloModule.forRoot(provideClient),
    CloudModule.forRoot(cloudSettings),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    RootNavPage,
    NewMessageModal,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
