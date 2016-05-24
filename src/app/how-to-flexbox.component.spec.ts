import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HowToFlexboxAppComponent } from '../app/how-to-flexbox.component';

beforeEachProviders(() => [HowToFlexboxAppComponent]);

describe('App: HowToFlexbox', () => {
  it('should create the app',
      inject([HowToFlexboxAppComponent], (app: HowToFlexboxAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
