import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Constants } from '../common';

Vue.use(VueI18n);

let locale = localStorage.getItem('lang');

if (locale === undefined) {
    locale = Constants.locale;
    localStorage.setItem('lang', locale);
}

const i18n: VueI18n = new VueI18n({
    locale: locale,
    fallbackLocale: locale,
    silentTranslationWarn: true
});

i18n.setLocaleMessage(locale, require(`./lang.${locale}.json`));

export default i18n;