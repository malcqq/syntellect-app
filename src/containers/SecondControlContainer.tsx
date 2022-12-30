import { FC } from 'react';
import { ContainerTitle } from '../components';
import { AutoCompleteViewModel } from '../viewModels/AutoCompleteViewModel';
import AutoCompleteControl from '../views/AutoCompleteControl';
import { Container } from './styled';

interface IProps {}

const SecondControlContainer: FC<IProps> = props => {
	const firstAutoCompleteViewModel = new AutoCompleteViewModel({
		title: 'первый автокомплитер контролл',
		maxCountriesShown: 3
	});
	const secondAutoCompleteViewModel = new AutoCompleteViewModel({
		title: 'второй автокомплитер контролл',
		maxCountriesShown: 10
	});
	return (
		<Container>
			<ContainerTitle title='Вторая задача' />
			<AutoCompleteControl viewModel={firstAutoCompleteViewModel} />
			<AutoCompleteControl viewModel={secondAutoCompleteViewModel} />
		</Container>
	);
};

export default SecondControlContainer;
