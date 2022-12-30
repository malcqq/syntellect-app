import { FC, ChangeEvent, HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLElement> {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ value, onChange, onClick }) => {
	return (
		<input type='text' value={value} onChange={onChange} onClick={onClick} />
	);
};

export default Input;
