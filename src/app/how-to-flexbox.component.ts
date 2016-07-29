import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'how-to-flexbox-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'how-to-flexbox.component.html',
  styleUrls: ['how-to-flexbox.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HowToFlexboxAppComponent {
  title = 'How to Flexbox';
}
