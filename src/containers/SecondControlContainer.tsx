import { FC } from 'react';
import { ContainerTitle } from '../components';
import { AutoCompleteViewModel } from '../viewModels/AutoCompleteViewModel';
import AutoCompleteControl from '../views/AutoCompleteControl';
/* import FirstControl from '../views/FirstControl';
import SecondControl from '../views/SecondControl'; */
interface IProps {}

const SecondControlContainer: FC<IProps> = props => {
	const firstAutoCompleteViewModel = new AutoCompleteViewModel(
		'первый автокомплитер контролл'
	);
	return (
		<>
			<ContainerTitle title='Вторая задача' />
			<AutoCompleteControl viewModel={firstAutoCompleteViewModel} />
		</>
	);
};

export default SecondControlContainer;
