// import { TRASH_MOCK } from '~/shared/mock/trash.ts';
import trashMock from '~/shared/mock/trash.json';

class TrashService {
	getTrashItems() {
		// return TRASH_MOCK;
		return trashMock;
	}
}

export const trashService = new TrashService();
