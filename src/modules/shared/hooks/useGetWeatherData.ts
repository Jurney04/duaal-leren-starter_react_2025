import { useQuery } from '@tanstack/react-query';
import { weatherService } from '../services';

interface Location {
	name: string;
	region: string;
	country: string;
	lat: number;
	lon: number;
	timezone_id: string;
	localtime: string;
}

interface CurrentWeather {
	temperature: number;
	feels_like: number;
	weather_descriptions: string[];
	weather_icons: string[];
	wind_speed: number;
	wind_dir: string;
	humidity: number;
	cloudcover: number;
	uv_index: number;
	visibility: number;
	pressure: number;
	is_day: string;
}

interface WeatherCondition {
	text: string;
	icon: string;
}

interface HourlyForecast {
	time: string;
	temp: number;
	condition: string;
}

interface DailyForecast {
	maxtemp: number;
	mintemp: number;
	avgtemp: number;
	sunrise: string;
	sunset: string;
	chance_of_rain: number;
	total_precip_mm: number;
	condition: WeatherCondition;
	hourly: HourlyForecast[];
}

interface WeatherData {
	location: Location;
	current: CurrentWeather;
	forecast: {
		[date: string]: DailyForecast;
	};
}

export const useGetWeatherData = () =>
	useQuery<WeatherData, Error>({
		queryKey: ['weather'],
		queryFn: weatherService.getWeather,
	});
