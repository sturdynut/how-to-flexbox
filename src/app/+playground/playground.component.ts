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
  display: string = 'flex';
  justifyContent: string;
  alignItems: string;
  flexFlow: string;
  alignContent: string;
  flexDirection: string;
  flexWrap: string;
  justifyContentOptions: string[];
  alignItemsOptions: string[];
  alignContentOptions: string[];
  flexFlowOptions: string[];
  flexWrapOptions: string[];

  constructor(private _flexItemService: FlexItemService) { }

  ngOnInit() {
    this._flexItemService.getFlexItems()
      .then(flexItems => this.flexItems = flexItems);
    this.justifyContentOptions = this._flexItemService.getJustifyContentOptions();
    this.alignItemsOptions = this._flexItemService.getAlignItemsOptions();
    this.alignContentOptions = this._flexItemService.getAlignContentOptions();
    this.flexFlowOptions = this._flexItemService.getFlexFlowOptions();
  }

}
