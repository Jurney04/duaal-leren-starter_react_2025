import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
	getWeather() {
		return weatherMock;
	}
}
export const weatherService = new WeatherService();
