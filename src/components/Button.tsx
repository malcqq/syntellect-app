import { FC } from 'react';
import { BtnWrap } from './styled';

interface IProps {
	onClick: () => void;
	text?: string;
	defaultText?: string;
}
const Button: FC<IProps> = ({ text, onClick, defaultText = 'кнопка' }) => {
	return <BtnWrap onClick={onClick}>{text || defaultText}</BtnWrap>;
};

export default Button;
