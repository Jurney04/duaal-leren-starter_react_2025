import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import home_nl from '../../../../i18n/nl/home.json';
import details_nl from '../../../../i18n/nl/details.json';
import home_en from '../../../../i18n/en/home.json';
import details_en from '../../../../i18n/en/details.json';
i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			nl: {
				translation: {
					home: home_nl,
					details: details_nl,
				},
			},
			en: {
				translation: {
					home: home_en,
					details: details_en,
				},
			},
		},
		fallbackLng: 'nl',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
