import { useQuery } from '@tanstack/react-query';
import { weatherService } from '../services';

export const useGetWeatherData = () =>
	useQuery({ queryKey: ['weather'], queryFn: weatherService.getWeather });
