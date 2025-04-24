import { useGetWeatherData } from '~/shared/hooks/useGetWeatherData';
import { getDate } from '../hooks/useGetDate';

export const WeatherConditionChecker = (type: String) => {
	const date = getDate();
	const { data } = useGetWeatherData();
	// console.log(data);
	if (!data) {
		return 'Loading';
	}
	return data.forecast[date].condition[type] || 'Loading';
};
