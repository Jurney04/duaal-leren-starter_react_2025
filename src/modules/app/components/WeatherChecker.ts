import { weatherService } from '~/shared/services';

function WeatherChecker() {
	let today = new Date();
	today.setDate(today.getDate());
	let date = today.toISOString().slice(0, 10);

	return weatherService.getWeather().forecast[date].condition.text;
}
export default WeatherChecker;
