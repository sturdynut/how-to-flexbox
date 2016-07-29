import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HowToFlexboxAppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(HowToFlexboxAppComponent, [
  appRouterProviders
])
.catch(err => console.error(err));
