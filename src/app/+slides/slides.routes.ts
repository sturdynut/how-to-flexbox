import { RouterConfig } from '@angular/router';
import { SlidesComponent } from '../+slides';

export const slidesRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/slides',
    pathMatch: 'full'
  },
  {
    path: 'slides',
    component: SlidesComponent,
    children: []
  }
];