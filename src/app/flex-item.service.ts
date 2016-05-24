import { Injectable } from '@angular/core';
import { FlexItem } from './flex-item/flex-item.model';

@Injectable()
export class FlexItemService {
  getFlexItems() {
    const MOCK_FLEX_ITEMS: FlexItem[] = [
      { name: 'Flex Item 1' },
      { name: 'Flex Item 2' },
      { name: 'Flex Item 3' },
      { name: 'Flex Item 4' },
      { name: 'Flex Item 5' },
      { name: 'Flex Item 6' },
      { name: 'Flex Item 7' },
      { name: 'Flex Item 8' },
      { name: 'Flex Item 9' },
      { name: 'Flex Item 10' }
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

  getFlexGrowOptions() {
    return [0, 1, 2, 4, 8, 16]
  }

  getFlexShrinkOptions() {
    return [0, 1, 2, 4, 8, 16]
  }

  getFlexBasisOptions() {
    return ['auto', '0', '5%', '10%', '25%', '50%', '75%', '100%', '5px', '10px', '25px', '50px', '100px', '200px', '400px', '800px'];
  }

  getFlexOptions() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
  }
}
