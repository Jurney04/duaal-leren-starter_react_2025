import TrashContainer from './TrashChecker';
import WeatherChecker from './WeatherChecker';

function WeatherNotification() {
	if (
		WeatherChecker().includes('Sunny') ||
		WeatherChecker().includes('cloudy')
	) {
		// console.log('You can place it outside tonight');
		return 'You can place your trash outside tonight';
	} else if (
		WeatherChecker().includes('rain') ||
		WeatherChecker().includes('snow')
	) {
		if (
			TrashContainer().includes('paper') ||
			TrashContainer().includes('carton')
		) {
			return 'You can not place your paper/carton outside tonight due to rain/snow';
		} else {
			// console.log('You cant place paper/carton outside tonight');
			return 'You can place your trash outside tonight';
		}
	} else if (
		WeatherChecker().includes('storm') ||
		WeatherChecker().includes('hagel')
	) {
		// console.log('You should not place anything outside tonight');
		return 'You should not place anything outside tonight';
	}
}
export default WeatherNotification;
