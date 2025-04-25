import weatherMock from '~/shared/mock/weather.json';
import { WeatherData } from '../../types/types';

class WeatherService {
	// Specify the return type of the method
	getWeather(): Promise<WeatherData> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(weatherMock); // Ensure weatherMock matches WeatherData structure
			}, 1000);
		});
	}
}

export const weatherService = new WeatherService();
