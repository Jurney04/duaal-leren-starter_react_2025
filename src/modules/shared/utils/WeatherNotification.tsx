import { TrashChecker } from './TrashChecker';
import { WeatherConditionChecker } from './WeatherConditionChecker';
import { Trans } from 'react-i18next';
export const WeatherNotification = () => {
	const trashStatus = TrashChecker();
	const weatherText = WeatherConditionChecker('text');
	const weatherIcon = WeatherConditionChecker('icon');
	if (weatherText.includes('Loading') || trashStatus.includes('Loading')) {
		return 'Loading...';
	} else if (
		weatherText.includes('Sunny') ||
		weatherText.includes('cloudy')
	) {
		return (
			<div>
				<img src={weatherIcon} />
				<Trans>home.trash.sun</Trans>
			</div>
		);
	} else if (weatherText.includes('rain') || weatherText.includes('snow')) {
		if (trashStatus?.includes('paper') || trashStatus?.includes('carton')) {
			return (
				<div>
					<img src={weatherIcon} />
					<Trans>home.trash.rain</Trans>
				</div>
			);
		} else {
			// console.log('You cant place paper/carton outside tonight');
			return (
				<div>
					<img src={weatherIcon} />
					<Trans>home.trash.sun</Trans>
				</div>
			);
		}
	} else if (weatherText.includes('storm') || weatherText.includes('hagel')) {
		// console.log('You should not place anything outside tonight');
		return (
			<div>
				<img src={weatherIcon} />
				<Trans>home.trash.storm</Trans>
			</div>
		);
	}
};
