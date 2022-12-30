import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { ControlViewModel } from '../viewModels/ControlViewModel';
import { Input, ControlTitle, Button } from '../components';

interface IProps {
	viewModel: ControlViewModel;
}
const FirstControl: FC<IProps> = observer(({ viewModel }) => {
	return (
		<>
			<ControlTitle title={viewModel.title} />
			<Input value={viewModel.controlText} onChange={viewModel.changeText} />
			<Button
				text={viewModel.controlText}
				onClick={viewModel.clearText}
				defaultText='Первая кнопка'
			/>
			<Button
				onClick={() => viewModel.replaceText()}
				defaultText='Вторая кнопка'
			/>
		</>
	);
});

export default FirstControl;
