import { useGetTrashData } from '~/shared/hooks/useGetTrashData';
import { getDate } from '../hooks/useGetDate';

interface TrashItem {
	id: string;
	name: string;
}

interface TrashData {
	[date: string]: TrashItem;
}

export const TrashChecker: React.FC = () => {
	const date: string = getDate();
	const { data }: { data: TrashData } = useGetTrashData();

	if (!data) {
		return 'Loading...';
	}
	const trashItem = data[date];
	if (!trashItem) {
		return 'No trash data for this date.';
	}

	return trashItem.id;
};
