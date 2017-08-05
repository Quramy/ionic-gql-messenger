import "rxjs/Observable";
import "rxjs/add/operator/take";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinct";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/switchMap";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
