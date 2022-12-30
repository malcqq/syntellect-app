import styled from 'styled-components';

export const Wrap = styled.div`
	max-width: 500px;
	margin: 0 auto;
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	background-color: #fff;
	padding: 10px;
	border-radius: 10px;
	margin-bottom: 10px;
`;

export const PanelBtn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PanelInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 65%;
	margin: 0 auto;
	> input {
		max-height: 15px;
		padding: 5px;
	}
`;

export const SecondControlInner = styled.div`
	display: flex;
	justify-content: space-between;
	> input {
		max-height: 15px;
		padding: 5px;
	}
`;
