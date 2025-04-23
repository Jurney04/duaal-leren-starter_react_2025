import { useGetTrashData } from '~/shared/hooks/useGetTrashData';

export const TrashChecker = () => {
	// YOUR TRASH
	// return trashService.getTrashItems().map((item) => {
	// 	return item.id;
	// });

	let today = new Date();
	today.setDate(today.getDate() - 1);
	let date = today.toISOString().slice(0, 10);

	const { data } = useGetTrashData();
	// console.log(data);

	// console.log('TrashChecker', data);
	if (!data) {
		return 'Loading';
	}
	// console.log('TrashChecker', data[date].id);
	return data[date].id || 'Loading';

	// return 'trash';
};
