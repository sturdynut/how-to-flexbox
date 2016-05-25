import { Component, ViewEncapsulation } from '@angular/core';
import { FlexContainerComponent } from './flex-container/flex-container.component'
import { SlidesComponent } from './+slides';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PlaygroundComponent } from './+playground';

@Component({
  moduleId: module.id,
  selector: 'how-to-flexbox-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'how-to-flexbox.component.html',
  styleUrls: ['how-to-flexbox.component.css'],
  directives: [ROUTER_DIRECTIVES, FlexContainerComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: SlidesComponent},
  {path: '/playground', component: PlaygroundComponent}
])
export class HowToFlexboxAppComponent {
  title = 'How to Flexbox';
}
