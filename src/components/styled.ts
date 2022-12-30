import styled from 'styled-components';

export const InputNumberWrap = styled.label`
	display: flex;
	margin-bottom: 5px;
	> input {
		max-width: 30px;
		margin-left: auto;
	}
`;

export const MainTitleWrap = styled.h1`
	text-align: center;
`;

export const TitleWrap = styled.h2`
	text-align: center;
`;

export const BtnWrap = styled.button`
	background-color: #0095ff;
	border: 1px solid transparent;
	border-radius: 3px;
	box-shadow: rgb(255 255 255 / 40%) 0 1px 0 0 inset;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans',
		sans-serif;
	font-size: 13px;
	font-weight: 400;
	line-height: 1.15385;
	margin: 0;
	outline: none;
	padding: 8px 0.8em;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: baseline;
	white-space: nowrap;
	margin-bottom: 5px;
	:hover {
		background-color: #07c;
	}
`;
