import { TestBed } from '@angular/core/testing';

import { MarvelKeyInterceptor } from './marvel-key.interceptor';

describe('MarvelKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MarvelKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MarvelKeyInterceptor = TestBed.inject(MarvelKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
