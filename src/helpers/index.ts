export const checkOnlyNumbers = (string: string) => {
	const pattern = /^\d+$/;
	return pattern.test(string);
};
