import { useGetTrashData } from './useGetTrashData';
import { useGetWeatherData } from './useGetWeatherData';

export const useGetNewData = () => {
	const { refetch : refetchWeather } = useGetWeatherData();
	const { refetch: refetchTrash } = useGetTrashData();

	return () => {
		refetchWeather();
		refetchTrash();
	};
};
