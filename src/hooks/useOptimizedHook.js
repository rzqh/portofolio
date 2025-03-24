import { useState, useEffect, useRef } from 'react';

export function useOptimizedHook(fetchData) {
	const [data, setData] = useState(null);
	const cache = useRef(null);

	useEffect(() => {
		if (cache.current) {
			setData(cache.current);
			return;
		}

		let isMounted = true;
		fetchData().then((result) => {
			if (isMounted) {
				cache.current = result;
				setData(result);
			}
		});
		return () => {
			isMounted = false;
		};
	}, [fetchData]);

	return data;
}
