import { useGetWeatherData } from '~/shared/hooks/useGetWeatherData';
import { getDate } from '../hooks/useGetDate';
import { WeatherCondition } from '../services/weather/weather.service';

export const WeatherConditionChecker = (
	conditionType: keyof WeatherCondition,
) => {
	const date = getDate();

	const { data } = useGetWeatherData();

	// console.log(data);
	if (!data) {
		return 'Loading';
	}
	return data.forecast[date].condition[conditionType] || 'Loading';
};
