import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules } from 'react-native';
import plLang from './locale/translationPL/plLang';
import enLang from './locale/translationEN/enLang';

i18next
	.use(initReactI18next)
	.init({
		compatibilityJSON: 'v3',
		ns: ['common'],
		resources: {
			en_EN: {
				translation: enLang,
				common: enLang.common,
			},
			pl_PL: {
				translation: plLang,
				common: plLang.common,
			},
		},
		lng: NativeModules.I18nManager?.localeIdentifier,
		fallbackLng: 'en_EN',
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
		defaultNS: 'common',
	});

export default i18next;