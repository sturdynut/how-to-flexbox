import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FlexItem } from './flex-item.model';
import { FlexItemService } from '../flex-item.service';

@Component({
  moduleId: module.id,
  selector: 'app-flex-item',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: 'flex-item.component.html',
  styleUrls: ['./flex-item.component.css'],
  host: {
    '[style.alignSelf]': 'flexItem.alignSelf',
    '[style.flexGrow]': 'flexItem.flexGrow',
    '[style.flexShrink]': 'flexItem.flexShrink',
    '[style.flexBasis]': 'flexItem.flexBasis',
    '[style.order]': 'flexItem.order',
    '[style.visibility]': 'flexItem.visibility',
    '[style.marginLeft]': 'flexItem.marginLeft',
    '[style.marginRight]': 'flexItem.marginRight',
    '[style.marginTop]': 'flexItem.marginTop',
    '[style.marginBottom]': 'flexItem.marginBottom',
    '[style.display]': 'flexItem.display'
  }
})
export class FlexItemComponent implements OnInit {
  @Input() flexItem: FlexItem;
  @Input() showControls: boolean;
  @Output() onRemove = new EventEmitter();

  alignSelfOptions: string[];
  flexBasisOptions: string[];

  constructor(private _flexItemService: FlexItemService) { }

  ngOnInit() {
    this.alignSelfOptions = this._flexItemService.getAlignItemsOptions();
    this.flexBasisOptions = this._flexItemService.getFlexBasisOptions();
  }

  destroy() {
    this.onRemove.emit({
      item: this.flexItem
    });
  }

}
