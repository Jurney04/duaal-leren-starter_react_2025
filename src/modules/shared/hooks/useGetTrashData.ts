import { useQuery } from '@tanstack/react-query';
import { trashService } from '../services';
import { TrashData } from '../types/types';
// Define the structure of a trash item

export const useGetTrashData = () =>
	useQuery<TrashData, Error>({
		queryKey: ['trash'],
		queryFn: trashService.getTrashItems,
	});
