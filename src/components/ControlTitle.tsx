import { FC } from 'react';
import { TitleWrap } from './styled';

interface IProps {
	title?: string;
}
const ControlTitle: FC<IProps> = ({ title }) => {
	return <TitleWrap>{title}</TitleWrap>;
};

export default ControlTitle;
