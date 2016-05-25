import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { FilterItems } from './filter-items.pipe';

describe('FilterItems Pipe', () => {
  beforeEachProviders(() => [FilterItems]);

  // it('should transform the input', inject([FilterItems], (pipe: FilterItems) => {
  //     expect(pipe.transform(true)).toBe(null);
  // }));
});
