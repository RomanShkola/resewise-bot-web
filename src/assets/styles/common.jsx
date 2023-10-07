import styled from "styled-components";

export const SVGWrapper = styled.span`
  svg {
    width: ${({ width }) =>  width ?`${width}px` : `30px`};
    height: ${({ height }) =>  height ?`${height}px` : `30px`};
    fill: white;
  }
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const ViewTitle = styled.div`
  color: white;
  margin: 16px 0;
  font-weight: bold;
  font-size: 38px;
`;
export const RangeLabel = styled.span`
	font-size: 12px;
	opacity: 0.6;
`;

export const Button = styled.button`
	padding: 16px 20px;
	border: none;
	color: white;
	border-radius: 10px;
  cursor: pointer;
	outline: 0;
	font-size: 16px;
	width: ${({ size }) => size ? ButtonTypes[size] : `auto`};
	background-color: ${({type}) => type ? ButtonColors[type] : ButtonColors['primary']};
`;

const ButtonTypes = {
	'full' : '100%',
}

const ButtonColors = {
	'primary' : '#41729F',
	'yellow': '#D5B017',
	'green': '#3FB250'
}
export const ServiceItem = styled.span`
	padding: 10px 10px;
	font-size: 12px;
	background-color: #41729F;
	border-radius: 50px;
	margin: 0 10px 10px 0;
	box-sizing: border-box;
	transition: border 0.3s;
  border: solid 2px transparent;
	${props => props.$selectable ? `cursor: pointer;` : ``}
	${props => props.$selected ? `border: 2px solid #97BAEB;` : ``}
`;