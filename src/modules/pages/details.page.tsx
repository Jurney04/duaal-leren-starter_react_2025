import styles from '~/app/components/App/App.module.scss';
import { clsx } from 'clsx';
import { WeatherDetailsNotification } from '~/shared/utils/WeatherDetailsNotification.tsx';
import { Trans } from 'react-i18next';
import { Link } from 'react-router';
import { LanguageButton } from '~/shared/utils/LanguageButton';
export const Details = () => {
	return (
		<div className={clsx(styles['p-details'])}>
			<LanguageButton />
			<h1>
				<Trans>details.title</Trans>
			</h1>
			{/* <div className={clsx(styles['p-home__greenBlob'])}></div> */}
			<div className={clsx(styles['p-details__notification'])}>
				{/* <WeatherConditionChecker /> <br />
				<br /> */}
				<WeatherDetailsNotification />
			</div>
			<Link to="/home">
				<Trans>details.return</Trans>
			</Link>
		</div>
	);
};
