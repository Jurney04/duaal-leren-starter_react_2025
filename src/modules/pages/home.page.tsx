import styles from '~/app/components/App/App.module.scss';
import { clsx } from 'clsx';
import { WeatherNotification } from '~/shared/utils/WeatherNotification';
import { TrashContainer } from '~/shared/utils/TrashContainer';
import { GetNewData } from '~/shared/utils/GetNewData';
import { Link } from 'react-router';
import { Trans } from 'react-i18next';
import { LanguageButton } from '~/shared/utils/LanguageButton';

export const Home: React.FC = () => {
	return (
		<div className={clsx(styles['p-home'])}>
			<LanguageButton />
			<h1>
				<Trans>home.title</Trans>
			</h1>

			<Link
				to="/details"
				className={clsx(styles['p-home__notification'])}
			>
				<WeatherNotification />
			</Link>
			<h2 className={clsx(styles['p-home__nextDelivery'])}>
				<Trans>home.pickup</Trans>
			</h2>
			<h2 className={clsx(styles['p-home__nextDeliveryDate'])}>
				<Trans>home.tomorrow</Trans>
			</h2>

			<TrashContainer />
			<GetNewData />
		</div>
	);
};
