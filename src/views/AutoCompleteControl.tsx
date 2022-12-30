import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { AutoCompleteViewModel } from '../viewModels/AutoCompleteViewModel';
import { AutoComplete, ControlTitle } from '../components';
import useDebounce from '../hooks/useDebounce';
import { getCountryByName } from '../api/apiService';

import { Wrap } from './styled';

interface IProps {
	viewModel: AutoCompleteViewModel;
}
const DELAY = 500;

const AutoCompleteControl: FC<IProps> = observer(({ viewModel }) => {
	const debouncedSearchTerm: string = useDebounce({
		value: viewModel.controlText,
		delay: DELAY
	});
	useEffect(() => {
		(async () => {
			try {
				const countries = await getCountryByName(debouncedSearchTerm);
				viewModel.setCountries(countries);
			} catch (e) {
				console.error(e);
				viewModel.setCountries([]);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearchTerm]);

	return (
		<Wrap>
			<ControlTitle title={viewModel.title} />
			<AutoComplete
				value={viewModel.controlText}
				onChange={viewModel.changeText}
				countries={viewModel.countries}
				canShowCountries={viewModel.countriesShown}
				onChangeNum={viewModel.changeMaxCountriesShowns}
				numValue={viewModel.countriesShown}
				onSetActiveCountry={viewModel.setActiveCountry}
			/>
		</Wrap>
	);
});

export default AutoCompleteControl;
