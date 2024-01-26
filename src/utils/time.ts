const YEAR_MILLIS = 1000 * 60 * 60 * 24 * 365.25;

export const calculateAge = (start: Date, end: Date = new Date()) => {
	const age = Math.floor((end.getTime() - start.getTime()) / YEAR_MILLIS);
	return age;
};

