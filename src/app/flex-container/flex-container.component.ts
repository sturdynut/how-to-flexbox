import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlexItemComponent } from '../flex-item/flex-item.component';
import { FlexItem } from '../flex-item/flex-item.model';
import { FlexItemService } from '../flex-item.service';

@Component({
  moduleId: module.id,
  selector: 'app-flex-container',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: 'flex-container.component.html',
  styleUrls: ['./flex-container.component.css'],
  directives: [FlexItemComponent],
  providers: [FlexItemService]
})
export class FlexContainerComponent implements OnInit {
  flexItems: FlexItem[];

  justifyContent: string;
  alignItems: string;
  alignContent: string;
  flexFlow: string;

  justifyContentOptions: string[];
  alignItemsOptions: string[];
  alignContentOptions: string[];
  flexFlowOptions: string[];
  flexWrapOptions: string[];

  constructor(private _flexItemService: FlexItemService) { }

  ngOnInit() {
    this.justifyContentOptions = this._flexItemService.getJustifyContentOptions();
    this.alignItemsOptions = this._flexItemService.getAlignItemsOptions();
    this.alignContentOptions = this._flexItemService.getAlignContentOptions();
    this.flexFlowOptions = this._flexItemService.getFlexFlowOptions();

    this.justifyContent = this.justifyContentOptions[0];
    this.alignItems = this.alignItemsOptions[0];
    this.alignContent = this.alignContentOptions[0];
    this.flexFlow = this.flexFlowOptions[0];

    this._flexItemService.getFlexItems()
      .then(flexItems => this.flexItems = flexItems);
  }
}
