import { FC } from 'react';

import { SItem } from './styled';

interface IProps {
	onSetActiveCountry: (countryName: string) => void;
	name: string;
	fullName: string;
	flag: string;
	onSetShown: (isShown: boolean) => void;
}
const ListItem: FC<IProps> = ({
	name,
	fullName,
	flag,
	onSetActiveCountry,
	onSetShown
}: IProps) => {
	return (
		<SItem
			onClick={() => {
				onSetActiveCountry(name);
				onSetShown(false);
			}}
		>
			<span>{name}:&nbsp;</span>
			<span>{fullName}</span>
			<img alt={name} src={flag} />
		</SItem>
	);
};

export default ListItem;
