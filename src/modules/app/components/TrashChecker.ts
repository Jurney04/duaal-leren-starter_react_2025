import { trashService } from '~/shared/services';

function TrashChecker() {
	// YOUR TRASH
	// return trashService.getTrashItems().map((item) => {
	// 	return item.id;
	// });

	let today = new Date();
	today.setDate(today.getDate());
	let date = today.toISOString().slice(0, 10);
	// let item = trashService.getTrashItems()[date].id;
	return trashService.getTrashItems()[date].id;
}
export default TrashChecker;
