import { useGetTrashData } from '~/shared/hooks/useGetTrashData';
import { getDate } from '../hooks/useGetDate';

export const TrashChecker = () => {
	const date = getDate();

	const { data } = useGetTrashData();

	if (!data) {
		return 'Loading';
	}
	return data[date].id || 'Loading';
};
