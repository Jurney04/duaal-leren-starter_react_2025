import { useGetWeatherData } from '~/shared/hooks/useGetWeatherData';

export const WeatherChecker = (type: String) => {
	let today = new Date();
	today.setDate(today.getDate() - 1);
	let date = today.toISOString().slice(0, 10);

	const { data } = useGetWeatherData();
	// console.log(data);
	if (!data) {
		return 'Loading';
	}
	return data.forecast[date].condition[type] || 'Loading';
};
