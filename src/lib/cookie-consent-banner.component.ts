import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'igon-cookie-consent-banner',
  templateUrl: './cookie-consent-banner.component.html',
  styleUrls: ['./styles/cookie-consent-banner.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IgonCookieConsentBannerComponent implements OnInit {

  @Input() consentVersion: number = 1;
  @Input() messageText: string = 'Мы используем cookies';
  @Input() buttonText: string = 'Принять и закрыть';

  @Input() cookieName: string = 'ebs_cookie_consent';
  @Input() cookieDomain: string = '';
  @Input() cookieLifetimeHours: number = 8;

  @Input() backendUrl?: string = 'http://profile.ebs.local/api/v2/cabinet/profile/cookie-consent';
  @Input() isAuthenticated: boolean = false;

  @Output() buttonAcceptPressed: EventEmitter<any> = new EventEmitter<any>();

  consentGiven = false;

  constructor(@Inject(DOCUMENT) private document: any, private http: HttpClient) {}

  ngOnInit() {
    const consent = this.getCookie(this.cookieName);
    if (consent === 'true') {
      this.consentGiven = true;
    }
  }

  acceptCookies() {
    this.setCookie(this.cookieName, 'true', this.cookieDomain, this.cookieLifetimeHours);
    this.consentGiven = true;
    if (this.isAuthenticated && this.backendUrl) {
      this.http.post(this.backendUrl, { cookie_consent: { version: this.consentVersion } }, { withCredentials: true }).subscribe();
    }
    this.buttonAcceptPressed.emit();
  }

  private setCookie(name: string, value: string, domain: string, hours: number) {
    const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
    if (domain) {
      this.document.cookie = `${name}=${value}; domain=${domain}; expires=${expires}; path=/`;
    } else {
      this.document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }
  }

  private getCookie(name: string): string | null {
    const cookies = this.document.cookie.split('; ').reduce((acc: any, item) => {
      const [key, val] = item.split('=');
      acc[key] = val;
      return acc;
    }, {});
    return cookies[name] || null;
  }
}
