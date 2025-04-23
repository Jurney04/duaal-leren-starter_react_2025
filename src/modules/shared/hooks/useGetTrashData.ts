import { useQuery } from '@tanstack/react-query';
import { trashService } from '../services';

export const useGetTrashData = () =>
	useQuery({ queryKey: ['trash'], queryFn: trashService.getTrashItems });
