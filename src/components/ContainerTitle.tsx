import { FC } from 'react';

interface IProps {
	title?: string;
}
const ContainerTitle: FC<IProps> = ({ title }) => {
	return <h1>{title}</h1>;
};

export default ContainerTitle;
