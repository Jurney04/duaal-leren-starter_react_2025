import { useChangeLanguage } from '../hooks/useChangeLanguage'; // Adjust the import path
import { Trans } from 'react-i18next';
import styles from '~/app/components/App/App.module.scss';
import { clsx } from 'clsx';

export const LanguageButton = () => {
	// Correctly define the component as React.FC
	const changeLanguage = useChangeLanguage(); // Get the changeLanguage function from the hook

	return (
		<button
			onClick={changeLanguage}
			className={clsx(styles['p-home__language'])}
		>
			<Trans>home.changeLanguage</Trans>
		</button>
	);
};
