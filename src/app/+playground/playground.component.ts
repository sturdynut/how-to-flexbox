import { Component, OnInit } from '@angular/core';
import { FlexContainerComponent } from '../flex-container/flex-container.component';
import { FlexItemService } from '../flex-item.service';
import { FlexItem } from '../flex-item/flex-item.model';

@Component({
  moduleId: module.id,
  selector: 'app-playground',
  templateUrl: 'playground.component.html',
  styleUrls: ['playground.component.css'],
  directives: [FlexContainerComponent],
  providers: [FlexItemService]
})
export class PlaygroundComponent implements OnInit {
  flexItems: FlexItem[];
  slides: any[];
  groupedSlides: any[];
  slideIndex: number;
  display: string;
  justifyContent: string;
  alignItems: string;
  flexFlow: string;
  alignContent: string;
  flexDirection: string;
  flexWrap: string;

  constructor(private _flexItemService: FlexItemService) { }

  ngOnInit() {
    this._flexItemService.getFlexItems()
      .then(flexItems => this.flexItems = flexItems);
  }

}
