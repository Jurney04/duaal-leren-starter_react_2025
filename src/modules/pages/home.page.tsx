import PullToRefresh from '../shared/components/PullToRefresh';
import styles from '~/app/components/App/App.module.scss';
import { clsx } from 'clsx';
import { WeatherNotification } from '~/shared/components/WeatherNotification';
import { TrashContainer } from '~/shared/components/TrashContainer';
import { GetNewData } from '~/shared/utils/GetNewData';
import { Link } from 'react-router';
import { Trans } from 'react-i18next';
import { LanguageButton } from '~/shared/components/LanguageButton';
import { useGetNewData } from '~/shared/hooks/useGetNewData';

export const Home = () => {
	const fetchData = useGetNewData();

	return (
		<PullToRefresh onRefresh={fetchData}>
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
		</PullToRefresh>
	);
};
