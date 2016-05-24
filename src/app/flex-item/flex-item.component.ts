import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FlexItem } from './flex-item.model';
import { FlexItemService } from '../flex-item.service';

@Component({
  moduleId: module.id,
  selector: 'app-flex-item',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: 'flex-item.component.html',
  styleUrls: ['./flex-item.component.css'],
  host: {
    '[style.alignSelf]': 'alignSelf',
    '[style.flexGrow]': 'flexGrow',
    '[style.flexShrink]': 'flexShrink',
    '[style.flexBasis]': 'flexBasis',
    '[style.order]': 'order'
  }
})
export class FlexItemComponent implements OnInit {
  @Input() flexItem: FlexItem;

  alignSelf: string;
  flexGrow: number;
  flexShrink: number;
  flexBasis: string;
  order: number;

  alignSelfOptions: string[];
  flexGrowOptions: number[];
  flexShrinkOptions: number[];
  flexBasisOptions: string[];
  orderOptions: number[];

  constructor(private _flexItemService: FlexItemService) { }

  ngOnInit() {
    this.alignSelfOptions = this._flexItemService.getAlignItemsOptions();
    this.flexGrowOptions = this._flexItemService.getFlexGrowOptions();
    this.flexShrinkOptions = this._flexItemService.getFlexShrinkOptions();
    this.flexBasisOptions = this._flexItemService.getFlexBasisOptions();
    this.orderOptions = this._flexItemService.getFlexOptions();

    this.alignSelf = this.alignSelfOptions[0];
    this.flexGrow = this.flexGrowOptions[1];
    this.flexShrink = this.flexShrinkOptions[1];
    this.flexBasis = this.flexBasisOptions[0];
    this.order = this.orderOptions[0];
  }

}
