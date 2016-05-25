import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FlexItemComponent } from '../flex-item/flex-item.component';
import { FlexItem } from '../flex-item/flex-item.model';
import { FlexItemService } from '../flex-item.service';
import { FilterItems } from '../filter-items.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-flex-container',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: 'flex-container.component.html',
  styleUrls: ['./flex-container.component.css'],
  directives: [FlexItemComponent],
  providers: [FlexItemService],
  pipes: [FilterItems]
})
export class FlexContainerComponent implements OnInit {
  @Input() flexItems: FlexItem[];
  @Input() showControls: boolean;
  @Input() display: string;
  @Input() justifyContent: string;
  @Input() alignItems: string;
  @Input() alignContent: string;
  @Input() flexFlow: string;
  @Input() flexDirection: string;
  @Input() flexWrap: string;

  removedFlexItems: FlexItem[];
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

    this.removedFlexItems = [];
  }

  onRemove(event) {
    this.removedFlexItems.push(event.item);
  }
}
