import {I18n as i18n} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en';
import vi from './locales/vi';

const locales = RNLocalize.getLocales();
const I18n = new i18n();

if (Array.isArray(locales)) {
  I18n.locale = 'vi';
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  vi,
};

export default I18n;
