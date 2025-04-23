// import { TRASH_MOCK } from '~/shared/mock/trash.ts';
import trashMock from '~/shared/mock/trash.json';

class TrashService {
	getTrashItems() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(trashMock);
			}, 1000);
		});
	}
}

export const trashService = new TrashService();
