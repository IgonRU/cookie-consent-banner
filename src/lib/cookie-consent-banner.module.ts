// projects/cookie-consent-banner/src/lib/cookie-consent-banner.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IgonCookieConsentBannerComponent } from './cookie-consent-banner.component';

@NgModule({
  declarations: [IgonCookieConsentBannerComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [IgonCookieConsentBannerComponent]
})
export class IgonCookieConsentBannerModule {}

// projects/cookie-consent-banner/src/public-api.ts


// package.json (в корне)

