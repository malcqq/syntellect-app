import { FC, useState } from 'react';

import Input from '../Input';
import InputNumber from '../InputNumber';
import List from './List';
import { Container } from './styled';

interface IProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	countries: ICountry[];
	onSetActiveCountry: (countryName: string) => void;
	onChangeNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
	numValue: number;
	canShowCountries: number;
}
const AutoComplete: FC<IProps> = ({
	value,
	countries,
	numValue,
	canShowCountries,
	onChange,
	onSetActiveCountry,
	onChangeNum
}) => {
	const [isShown, setIsShown] = useState(false);
	console.log(numValue, 'numValue');
	return (
		<Container>
			<InputNumber
				text='настройка подсказок'
				value={numValue}
				onChange={onChangeNum}
				onClick={() => setIsShown(false)}
			/>
			<Input
				value={value}
				onChange={e => {
					if (!isShown) {
						setIsShown(true);
					}
					onChange(e);
				}}
				onClick={() => {
					if (!isShown) {
						setIsShown(true);
					}
				}}
			/>
			{isShown && (
				<List
					list={countries}
					onSetActiveCountry={onSetActiveCountry}
					onSetShown={setIsShown}
					canShowCountries={canShowCountries}
				/>
			)}
		</Container>
	);
};

export default AutoComplete;
