import { TrashChecker } from './TrashChecker';
import { WeatherChecker } from './WeatherChecker';

export const WeatherNotification = () => {
	const trashStatus = TrashChecker();
	const weatherText = WeatherChecker('text');
	const weatherIcon = WeatherChecker('icon');
	if (weatherText.includes('Loading') || trashStatus.includes('Loading')) {
		return 'Loading...';
	} else if (
		weatherText.includes('Sunny') ||
		weatherText.includes('cloudy')
	) {
		// console.log('You can place it outside tonight');
		return (
			<div>
				<img src={weatherIcon} />
				You can place your trash outside tonight
			</div>
		);
	} else if (weatherText.includes('rain') || weatherText.includes('snow')) {
		if (trashStatus?.includes('paper') || trashStatus?.includes('carton')) {
			return (
				<div>
					<img src={weatherIcon} />
					You can not place your paper/carton outside tonight due to
					rain/snow
				</div>
			);
		} else {
			// console.log('You cant place paper/carton outside tonight');
			return (
				<div>
					<img src={weatherIcon} />
					You can place your trash outside tonight
				</div>
			);
		}
	} else if (weatherText.includes('storm') || weatherText.includes('hagel')) {
		// console.log('You should not place anything outside tonight');
		return (
			<div>
				<img src={weatherIcon} />
				You should not place anything outside tonight
			</div>
		);
	}
};
