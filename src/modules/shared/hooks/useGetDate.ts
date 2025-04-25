export const getDate = (): string => {
	let today = new Date();
	today.setDate(today.getDate() + 1);
	let date = today.toISOString().slice(0, 10);
	return date;
};
