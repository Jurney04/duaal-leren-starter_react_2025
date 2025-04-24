import { useChangeLanguage } from '../hooks/useChangeLanguage'; // Adjust the import path
import { Trans } from 'react-i18next';

export const LanguageButton = () => {
	const changeLanguage = useChangeLanguage(); // Get the changeLanguage function from the hook

	return <button onClick={changeLanguage}><Trans>home.changeLanguage</Trans></button>;
};
