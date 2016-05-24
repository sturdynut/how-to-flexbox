import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FlexItemService } from './flex-item.service';

describe('FlexItem Service', () => {
  beforeEachProviders(() => [FlexItemService]);

  it('should ...',
      inject([FlexItemService], (service: FlexItemService) => {
    expect(service).toBeTruthy();
  }));
});
