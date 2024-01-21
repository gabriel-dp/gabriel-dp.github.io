import { useState, useEffect, useCallback, useRef } from "react";

export enum FetchStatus {
	Idle = "idle",
	Loading = "loading",
	Success = "success",
	Error = "error",
}

interface FetchDataResponse<Data> {
	data: Data | null;
	error: string | null;
	status: FetchStatus;
}

export function useFetchData<Data>(
	url: string,
	options: RequestInit = {},
	immediate: boolean = true
): FetchDataResponse<Data> {
	const [data, setData] = useState<Data | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle);

	const optionsRef = useRef(options);

	const execute = useCallback(() => {
		setStatus(FetchStatus.Loading);
		fetch(url, optionsRef.current)
			.then(async (response) => {
				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(`Request failed with status: ${response.status}. ${errorText}`);
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
				setStatus(FetchStatus.Success);
			})
			.catch((error) => {
				setError(error.message);
				setStatus(FetchStatus.Error);
			});
	}, [url]);

	useEffect(() => {
		if (immediate) execute();
	}, [url, execute, immediate]);

	// Avoids infinite loop with options object
	useEffect(() => {
		optionsRef.current = options;
	}, [options]);

	return {
		data,
		error,
		status,
	};
}

