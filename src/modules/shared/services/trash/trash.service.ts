import trashMock from '~/shared/mock/trash.json';
import { TrashData } from '../../types/types';
class TrashService {
	// Specify the return type of the method
	getTrashItems(): Promise<TrashData> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(trashMock); // Ensure trashMock matches TrashData structure
			}, 1000);
		});
	}
}

export const trashService = new TrashService();
