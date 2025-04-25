import { useQuery } from '@tanstack/react-query';
import { weatherService } from '../services';
import { WeatherData } from '../types/types';
export const useGetWeatherData = () =>
	useQuery<WeatherData, Error>({
		queryKey: ['weather'],
		queryFn: weatherService.getWeather,
	});
