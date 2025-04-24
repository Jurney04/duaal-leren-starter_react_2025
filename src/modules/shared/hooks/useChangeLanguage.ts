import i18n from '~/app/components/Root/i18n.config';
export const useChangeLanguage = () => {
	const changeLanguage = () => {
		if (i18n.language === 'en') {
			i18n.changeLanguage('nl');
		} else if (i18n.language === 'nl') {
			i18n.changeLanguage('en');
		}
		window.location.reload();
	};

	return changeLanguage;
};
