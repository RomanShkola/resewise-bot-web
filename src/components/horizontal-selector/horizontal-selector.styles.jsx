import styled from "styled-components";

export const ScheduleTypeSelector = styled.div`
	border-radius: 50px;
	background-color: #31517F;
	height: 36px;
	width: 100%;
	margin: 16px;
	display: flex;
  padding: 10px;
	position: relative;
	
	&:before {
    content: "";
    border-radius: 50px;
    background-color: #5885AF;
    width: ${({ num }) => num ? `${100 / num}%` : `100%` };
    position: absolute;
    height: 90%;
    top: 5%;
		//left: 4px;
		${({selectedValue, num}) => selectedValue ? `left: calc(${selectedValue * (100 / num)}% - 4px);` : `left: 4px`}
	}
`;

export const InnerValue = styled.span`
	
`;

export const ScheduleTypeSelectorValue = styled.div`
	flex: 1 0;
	justify-content: center;
	align-items: center;
	display: flex;
  position: relative;
`;

