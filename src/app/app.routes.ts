import { provideRouter, RouterConfig } from '@angular/router';
import { SlidesComponent } from './+slides';
import { PlaygroundComponent } from './+playground';
import { AboutComponent } from './+about';

const routes: RouterConfig = [
  {path: 'learn', component: SlidesComponent},
  {path: 'play', component: PlaygroundComponent},
  {path: 'about', component: AboutComponent},
  {
    path: '',
    redirectTo: '/learn',
    pathMatch: 'full'
  },
  {path: '**', component: SlidesComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];