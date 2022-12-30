import { FC } from 'react';

import { ContainerTitle } from '../components';
import { ControlViewModel } from '../viewModels/ControlViewModel';
import FirstControl from '../views/FirstControl';
import SecondControl from '../views/SecondControl';

interface IProps {}

const FirstControlContainer: FC<IProps> = props => {
	const firstViewModel = new ControlViewModel('первый контролл');
	const secondViewModel = new ControlViewModel('второй контролл');
	return (
		<>
			<ContainerTitle title='Первая задача' />
			<FirstControl viewModel={firstViewModel} />
			<SecondControl viewModel={secondViewModel} />
		</>
	);
};

export default FirstControlContainer;
