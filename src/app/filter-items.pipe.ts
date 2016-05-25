import { Pipe, PipeTransform } from '@angular/core';
import { FlexItem } from './flex-item/flex-item.model';

@Pipe({
  name: 'filterItems'
})
export class FilterItems implements PipeTransform {

  transform(value: FlexItem[], items: FlexItem[]): FlexItem[] {
    if (!value) { return null; }
    if (!items) { return value; }

    return value.filter((flexItem, index) => {
      return !items.some((flexItemToFilter) => {
        return flexItem.name === flexItemToFilter.name;
      });
    });
  }

}
