import { FC, HTMLAttributes, ChangeEvent } from 'react';

import { InputNumberWrap } from './styled';
interface IProps extends HTMLAttributes<HTMLElement> {
	text: string;
	value: number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputNumber: FC<IProps> = ({ text, value, onChange, onClick }) => {
	return (
		<InputNumberWrap>
			{text}
			<input
				type='text'
				pattern='[0-9]*'
				value={value}
				onChange={onChange}
				onClick={onClick}
			/>
		</InputNumberWrap>
	);
};

export default InputNumber;
