import { FC } from 'react';
import uuidv4 from 'uuidv4';

import ListItem from './ListItem';
import { Wrap } from './styled';

interface IProps {
	list: ICountry[];
	onSetActiveCountry: (countryName: string) => void;
	onSetShown: (isShown: boolean) => void;
	canShowCountries: number;
}

const List: FC<IProps> = ({
	list,
	onSetActiveCountry,
	onSetShown,
	canShowCountries
}) => {
	const updCountries = [...list.slice(0, canShowCountries)];
	const listItems = updCountries.map(item => (
		<ListItem
			key={uuidv4()}
			{...item}
			onSetActiveCountry={onSetActiveCountry}
			onSetShown={onSetShown}
		/>
	));
	return <Wrap>{listItems}</Wrap>;
};

export default List;
