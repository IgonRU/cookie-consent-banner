import { TestBed } from '@angular/core/testing';

import { CookieConsentBannerService } from './cookie-consent-banner.service';

describe('CookieConsentBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieConsentBannerService = TestBed.get(CookieConsentBannerService);
    expect(service).toBeTruthy();
  });
});
