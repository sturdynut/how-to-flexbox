import { Component, ViewEncapsulation } from '@angular/core';
import { FlexContainerComponent } from './flex-container/flex-container.component'

@Component({
  moduleId: module.id,
  selector: 'how-to-flexbox-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'how-to-flexbox.component.html',
  styleUrls: ['how-to-flexbox.component.css'],
  directives: [FlexContainerComponent]
})
export class HowToFlexboxAppComponent {
  title = 'How to Flexbox';
}
