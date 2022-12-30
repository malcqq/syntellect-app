import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { AutoCompleteViewModel } from '../viewModels/AutoCompleteViewModel';
import { Input, ControlTitle, Button } from '../components';
import useDebounce from '../hooks/useDebounce';

interface IProps {
	viewModel: AutoCompleteViewModel;
}
const DELAY = 1000;

const AutoCompleteControl: FC<IProps> = observer(({ viewModel }) => {
	const debouncedSearchTerm: string = useDebounce({
		value: viewModel.controlText,
		delay: DELAY
	});
	return (
		<>
			<ControlTitle title={viewModel.title} />
			<Input value={debouncedSearchTerm} onChange={viewModel.changeText} />
		</>
	);
});

export default AutoCompleteControl;
