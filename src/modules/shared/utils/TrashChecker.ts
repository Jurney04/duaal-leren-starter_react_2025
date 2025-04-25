import { useGetTrashData } from '~/shared/hooks/useGetTrashData';
import { getDate } from '../hooks/useGetDate';

export const TrashChecker = (): string => {
	const date: string = getDate();
	const { data } = useGetTrashData(); // Destructure data, isLoading, and error
	if (!data) {
		return 'No trash data available.'; // Handle case where data is undefined
	}

	const trashItem = data[date];
	if (!trashItem) {
		return 'No trash data for this date.'; // Handle case where no data for the specific date
	}

	return trashItem.id; // Return the id of the trash item
};
