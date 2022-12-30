import { FC } from 'react';
import { MainTitleWrap } from './styled';

interface IProps {
	title?: string;
}
const ContainerTitle: FC<IProps> = ({ title }) => {
	return <MainTitleWrap>{title}</MainTitleWrap>;
};

export default ContainerTitle;
