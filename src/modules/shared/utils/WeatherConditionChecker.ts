import { useGetWeatherData } from '~/shared/hooks/useGetWeatherData';
import { getDate } from '../hooks/useGetDate';

export const WeatherConditionChecker = (type: String) => {
	const date = getDate();
	interface WeatherData {
		[key: string]: {
			id: string; 
		};
	}
	const { data }: { data: WeatherData | undefined } = useGetWeatherData();

	// console.log(data);
	if (!data) {
		return 'Loading';
	}
	return data.forecast[date].condition[type] || 'Loading';
};
