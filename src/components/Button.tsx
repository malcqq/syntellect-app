import { FC } from 'react';

interface IProps {
	onClick: () => void;
	text?: string;
	defaultText?: string;
}
const Button: FC<IProps> = ({ text, onClick, defaultText = 'кнопка' }) => {
	return <button onClick={onClick}>{text || defaultText}</button>;
};

export default Button;
