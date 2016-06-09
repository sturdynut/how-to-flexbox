import { Injectable } from '@angular/core';
import { FlexItem } from './flex-item/flex-item.model';

@Injectable()
export class FlexItemService {
  getFlexItems() {
    const MOCK_FLEX_ITEMS: any[] = [
      {
        name: '.flex-item-1',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-2',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-3',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-4',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-5',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-6',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-7',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-8',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-9',
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      },
      {
        name: '.flex-item-10' ,
        alignSelf: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        order: 0
      }
    ]

    return Promise.resolve(MOCK_FLEX_ITEMS);
  }

  getJustifyContentOptions() {
    return ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
  }

  getAlignItemsOptions() {
    return ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
  }

  getAlignContentOptions() {
    return ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'];
  }

  getFlexFlowOptions() {
    return [
      'row wrap', 'row wrap-reverse', 'row no-wrap',
      'column wrap', 'column wrap-reverse', 'column no-wrap',
      'row-reverse wrap', 'row-reverse wrap-reverse', 'row-reverse no-wrap',
      'column-reverse wrap', 'column-reverse wrap-reverse', 'column-reverse no-wrap'
    ];
  }

  getFlexBasisOptions() {
    return ['auto', '0', '5%', '10%', '25%', '50%', '75%', '100%', '5px', '10px', '25px', '50px', '100px', '200px', '400px', '800px'];
  }
}
