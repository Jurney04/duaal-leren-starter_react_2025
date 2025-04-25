import { useGetTrashData } from './useGetTrashData';
import { useGetWeatherData } from './useGetWeatherData';

export const useGetNewData = () => {
	const { refetch: refetchWeather } = useGetWeatherData();
	const { refetch: refetchTrash } = useGetTrashData();

	return async () => {
		// Await the refetch calls to ensure they return promises
		await Promise.all([refetchWeather(), refetchTrash()]);
	};
};
