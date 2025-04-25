import styles from '~/app/components/App/App.module.scss';
import { clsx } from 'clsx';
import PullToRefresh from '../shared/components/PullToRefresh';
import { WeatherDetailsNotification } from '~/shared/components/WeatherDetailsNotification';
import { Trans } from 'react-i18next';
import { Link } from 'react-router';
import { LanguageButton } from '~/shared/components/LanguageButton';
import { useGetNewData } from '~/shared/hooks/useGetNewData';

export const Details = () => {
	const fetchData = useGetNewData();
	return (
		<PullToRefresh onRefresh={fetchData}>
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
				<Link to="/home" className={clsx(styles['p-home__refresh'])}>
					<Trans>details.return</Trans>
				</Link>
			</div>
		</PullToRefresh>
	);
};
