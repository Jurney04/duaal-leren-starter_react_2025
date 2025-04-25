import trashMock from '~/shared/mock/trash.json';

// Define the structure of a trash item
interface TrashItem {
	id: string; // Unique identifier for the trash item
	name: string; // Name of the trash item
}

// Define the structure of the trash data
interface TrashData {
	[date: string]: TrashItem; // Mapping of date strings to TrashItem objects
}

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
