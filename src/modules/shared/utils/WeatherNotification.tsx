import { TrashChecker } from './TrashChecker';
import { WeatherConditionChecker } from './WeatherConditionChecker';
import { Trans } from 'react-i18next';

export const WeatherNotification = () => {
	const trashStatus: string = TrashChecker();
	const weatherText: string = WeatherConditionChecker('text');
	const weatherIcon: string = WeatherConditionChecker('icon');
	console.log(weatherText);
	return weatherText.includes('Loading') ? (
		<Trans>home.loading</Trans>
	) : trashStatus.includes('PMD') ||
	  trashStatus.includes('paper') ||
	  trashStatus.includes('rest') ? (
		weatherText.includes('Sunny') || weatherText.includes('cloudy') ? (
			<div>
				<img src={weatherIcon} alt="Weather Icon" />
				<Trans>home.trash.sun</Trans>
			</div>
		) : weatherText.includes('rain') || weatherText.includes('snow') ? (
			trashStatus.includes('paper') || trashStatus.includes('carton') ? (
				<div>
					<img src={weatherIcon} alt="Weather Icon" />
					<Trans>home.trash.rain</Trans>
				</div>
			) : (
				<div>
					<img src={weatherIcon} alt="Weather Icon" />
					<Trans>home.trash.sun</Trans>
				</div>
			)
		) : weatherText.includes('storm') || weatherText.includes('hagel') ? (
			<div>
				<img src={weatherIcon} alt="Weather Icon" />
				<Trans>home.trash.storm</Trans>
			</div>
		) : null
	) : trashStatus.includes('none') ? (
		<div>
			<Trans>home.trash.none</Trans>
		</div>
	) : null;
};
