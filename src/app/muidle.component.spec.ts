import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MuidleAppComponent } from '../app/muidle.component';

beforeEachProviders(() => [MuidleAppComponent]);

describe('App: Muidle', () => {
  it('should create the app',
      inject([MuidleAppComponent], (app: MuidleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'muidle works!\'',
      inject([MuidleAppComponent], (app: MuidleAppComponent) => {
    expect(app.title).toEqual('muidle works!');
  }));
});
