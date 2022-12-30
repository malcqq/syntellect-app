import { FC } from 'react';

interface IProps {
	title?: string;
}
const ControlTitle: FC<IProps> = ({ title }) => {
	return <h2>{title}</h2>;
};

export default ControlTitle;
