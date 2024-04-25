import { Config } from 'next-i18n-router/dist/types';

export const i18nConfig: Config = {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
    noPrefix: true,
    // prefixDefault: true,
};

export type Locale = (typeof i18nConfig.locales)[0];
