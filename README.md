# Cookie Consent Banner

Angular компонент для отображения баннера согласия на использование cookies. Компонент разработан в соответствии с требованиями GDPR и предоставляет гибкие возможности настройки.

## Особенности

- 🔒 Соответствие требованиям GDPR
- 🎨 Настраиваемый внешний вид
- 📱 Адаптивный дизайн
- 🔄 Поддержка версионирования согласий
- 🌐 Возможность интеграции с бэкендом
- 🍪 Гибкая настройка cookies

## Установка

```bash
npm install @igon/cookie-consent-banner
```

## Быстрый старт

1. Импортируйте модуль в ваш `app.module.ts`:
```typescript
import { IgonCookieConsentBannerModule } from '@igon/cookie-consent-banner';

@NgModule({
  imports: [
    IgonCookieConsentBannerModule
  ]
})
export class AppModule { }
```

2. Используйте компонент в шаблоне:
```html
<igon-cookie-consent-banner></igon-cookie-consent-banner>
```

## Настройка

Компонент поддерживает следующие входные параметры:

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| messageText | string | 'Мы используем cookies' | Текст сообщения в баннере |
| buttonText | string | 'Принять и закрыть' | Текст кнопки принятия |
| consentVersion | number | 1 | Версия согласия |
| cookieName | string | 'ebs_cookie_consent' | Имя cookie |
| cookieDomain | string | '' | Домен для cookie |
| cookieLifetimeHours | number | 8 | Время жизни cookie в часах |
| backendUrl | string | undefined | URL для отправки согласия на сервер |
| isAuthenticated | boolean | false | Флаг аутентификации пользователя |

## Примеры использования

### Базовое использование
```html
<igon-cookie-consent-banner
  messageText="Мы используем файлы cookie для улучшения работы сайта"
  buttonText="Согласен"
></igon-cookie-consent-banner>
```

### Расширенная конфигурация
```html
<igon-cookie-consent-banner
  [consentVersion]="2"
  messageText="Мы используем файлы cookie для аналитики и персонализации контента"
  buttonText="Принять все cookies"
  cookieName="my_cookie_consent"
  [cookieLifetimeHours]="24"
  [isAuthenticated]="true"
  backendUrl="https://api.example.com/cookie-consent"
  (buttonAcceptPressed)="onCookieAccept()"
></igon-cookie-consent-banner>
```

## События

| Событие | Описание |
|---------|-----------|
| buttonAcceptPressed | Срабатывает при нажатии на кнопку принятия cookies |

## Стилизация

Компонент использует инкапсуляцию стилей `ViewEncapsulation.None` и может быть легко стилизован с помощью CSS:

```scss
.cookie-banner {
  // Ваши стили
}

.banner-message {
  // Ваши стили
}

.cookie-banner button {
  // Ваши стили
}
```

## Требования

- Angular 6.0.0 или выше
- @angular/common
- @angular/core

## Лицензия

MIT

## Поддержка

Если у вас возникли проблемы или есть предложения по улучшению компонента, пожалуйста, создайте issue в репозитории проекта.
