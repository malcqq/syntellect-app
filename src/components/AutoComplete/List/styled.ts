import styled from 'styled-components';

export const Wrap = styled.ul`
	position: absolute;
	left: 10px;
	top: 42px;
	padding: 0;
	list-style-type: none;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	z-index: 9;
	max-height: 250px;
	overflow-y: auto;
`;

interface IItemProps extends React.HTMLAttributes<HTMLElement> {}

export const SItem = styled.li<IItemProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 15px 10px;

	:hover {
		background-color: rgba(25, 118, 210, 0.1);
		cursor: pointer;
	}

	> img {
		position: absolute;
		right: 10px;
		top: 5px;
		max-width: 35px;
		border: 1px solid black;
		border-radius: 5px;
	}
`;
