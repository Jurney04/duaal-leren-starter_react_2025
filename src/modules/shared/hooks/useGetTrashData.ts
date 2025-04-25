import { useQuery } from '@tanstack/react-query';
import { trashService } from '../services';

// Define the structure of a trash item
interface TrashItem {
	id: string; // Unique identifier for the trash item
	name: string; // Name of the trash item
}

// Define the structure of the trash data
interface TrashData {
	[date: string]: TrashItem; // Mapping of date strings to TrashItem objects
}

export const useGetTrashData = () =>
	useQuery<TrashData, Error>({
		queryKey: ['trash'],
		queryFn: trashService.getTrashItems,
	});
