import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';

const raSupabaseEnglishMessages = {
  'ra-supabase': {
    auth: {
        email: 'Email',
        confirm: 'Confirm',
        confirm_password: 'Confirm password',
      },
  },
}

const allEnglishMessages = mergeTranslations(
    englishMessages,
    raSupabaseEnglishMessages
);

export const i18nProvider = polyglotI18nProvider(
  locale => allEnglishMessages,
  'en'
);