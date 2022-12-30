import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { ControlViewModel } from '../viewModels/ControlViewModel';
import { Input, ControlTitle, Button } from '../components';
import { Wrap, PanelBtn, PanelInner } from './styled';

interface IProps {
	viewModel: ControlViewModel;
}
const FirstControl: FC<IProps> = observer(({ viewModel }) => {
	return (
		<Wrap>
			<ControlTitle title={viewModel.title} />
			<PanelInner>
				<Input value={viewModel.controlText} onChange={viewModel.changeText} />
				<PanelBtn>
					<Button
						text={viewModel.controlText}
						onClick={viewModel.clearText}
						defaultText='Первая кнопка'
					/>
					<Button
						onClick={() => viewModel.replaceText()}
						defaultText='Вторая кнопка'
					/>
				</PanelBtn>
			</PanelInner>
		</Wrap>
	);
});

export default FirstControl;
