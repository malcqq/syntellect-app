import { useEffect, useState } from 'react';

type DebounceProps = {
	value: string;
	delay: number;
};

const useDebounce = ({ value, delay }: DebounceProps) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(handler);
	}, [delay, value]);

	return debouncedValue;
};

export default useDebounce;
