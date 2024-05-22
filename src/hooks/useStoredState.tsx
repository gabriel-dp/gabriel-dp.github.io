import { useEffect, useState } from "react";

// Check if storedValue contains all initial keys
function matchStoredStructure<T extends object>(base: T, stored: object): boolean {
	let passed = true;

	const baseEntries = Object.entries(base);
	const storedEntries = Object.entries(stored);

	if (storedEntries.length != baseEntries.length) return false;
	for (let i = 0; i < baseEntries.length; i++) {
		if (baseEntries[i][0] != storedEntries[i][0]) {
			passed = false;
			break;
		}
	}

	return passed;
}

type StoredStateHookReturn<T> = [T, (newValue: T | ((previousValue: T) => T)) => void];

export default function useStoredState<T extends object>(key: string, initialValue: T): StoredStateHookReturn<T> {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key);
		if (storedValue) {
			const parsedValue = JSON.parse(storedValue);
			if (matchStoredStructure(initialValue, parsedValue)) {
				return parsedValue;
			}
		}
		return initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
