import styles from './app.module.scss';
import { clsx } from 'clsx';
import { WeatherChecker } from '~/shared/utils/WeatherChecker';
import { WeatherNotification } from '~/shared/utils/WeatherNotification.tsx';
import { TrashContainer } from '~/shared/utils/TrashContainer';
export const App = () => {
	// YOUR TRASH

	return (
		<div className={clsx(styles['p-home'])}>
			<h1>Recycle</h1>
			{/* <div className={clsx(styles['p-home__greenBlob'])}></div> */}
			<div className={clsx(styles['p-home__notification'])}>
				<WeatherChecker /> <br />
				<br />
				<WeatherNotification />
			</div>
			<h2 className={clsx(styles['p-home__nextDelivery'])}>
				Volgende ophaling
			</h2>
			<h2 className={clsx(styles['p-home__nextDeliveryDate'])}>Morgen</h2>

			{/* <TrashChecker /> */}
			<TrashContainer />
		</div>
	);
};
