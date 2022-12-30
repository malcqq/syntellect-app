import { useRef, useEffect } from 'react';

const useOutsideClick = (callback: () => void) => {
	const ref = useRef<any>();

	useEffect(() => {
		const handleClick = (event: Event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				console.log('here');
				callback();
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);

	return ref;
};

export default useOutsideClick;
