import styled from "styled-components";

export const PickerContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: 110px;
  background-color: #31517F;
	border-radius: 20px;
	padding: 20px 0;
`;

export const PickerRightBlock = styled.div`
  margin-right: 30px;
	display: flex;
`;

export const PickerLeftBlock = styled.div`
	display: flex;
	align-items: center;
	margin-left: 30px;
`;

export const PickerName = styled.span`

`;

export const PickerValue = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
  position: relative;
	transition: top 0.5s;
	top: ${({shift}) => shift > 0 ? `${-shift * 40}px` : 0 };
`;

export const PickerValueWrapper = styled.div`
	overflow: hidden;
	height: 100%;
`;

export const ArrowWrapper = styled.div`
	
`;

export const PickerValueContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin-left: ${({shiftLeft}) => shiftLeft ? `${shiftLeft}px` : `6px` };
`;


export const Arrow = styled.div`
  position: relative;
  width: 25px;
  height: 35px;
	cursor: pointer;
`;

export const ArrowUp = styled(Arrow)`

  &:before,
  &:after {
    content: "";
    border-radius: 0.2rem;
    display: block;
    background-color: white;
    opacity: 0.8;
  }

  &:before {
    position: absolute;
    top: 16px;
    right: 0;
  }

  &:after {
    position: absolute;
    bottom: 16px;
  }

  &:before,
  &:after {
    height: 0.2rem;
    width: 1rem;
  }

  &:before,
  &:after {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const ArrowDown = styled(Arrow)`

  &:before,
  &:after {
    content: "";
    border-radius: 0.2rem;
    display: block;
    background-color: white;
    opacity: 0.8;
  }

  &:before {
    position: absolute;
    top: 16px;
    right: 0;
  }

  &:after {
    position: absolute;
    bottom: 16px;
  }

  &:before,
  &:after {
    height: 0.2rem;
    width: 1rem;
  }

  &:before,
  &:after {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;


