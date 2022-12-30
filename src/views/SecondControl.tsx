import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { ControlViewModel } from '../viewModels/ControlViewModel';
import { Input, ControlTitle, Button } from '../components';
import { Wrap, SecondControlInner } from './styled';

interface IProps {
	viewModel: ControlViewModel;
}

const SecondControl: FC<IProps> = observer(({ viewModel }) => {
	return (
		<Wrap>
			<ControlTitle title={viewModel.title} />
			<SecondControlInner>
				<Button
					onClick={viewModel.alertOnlyNumbersText}
					defaultText='Левая кнопка'
				/>
				<Input value={viewModel.controlText} onChange={viewModel.changeText} />
				<Button
					onClick={viewModel.alertControlText}
					defaultText='Правая кнопка'
				/>
			</SecondControlInner>
		</Wrap>
	);
});

export default SecondControl;
