import { FC } from 'react';

import { ContainerTitle } from '../components';
import { ControlViewModel } from '../viewModels/ControlViewModel';
import FirstControl from '../views/FirstControl';
import SecondControl from '../views/SecondControl';
import { Container } from './styled';

interface IProps {}

const FirstControlContainer: FC<IProps> = props => {
	const firstViewModel = new ControlViewModel('первый контролл');
	const secondViewModel = new ControlViewModel('второй контролл');
	return (
		<Container>
			<ContainerTitle title='Первая задача' />
			<FirstControl viewModel={firstViewModel} />
			<SecondControl viewModel={secondViewModel} />
		</Container>
	);
};

export default FirstControlContainer;
