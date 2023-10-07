import styled from "styled-components";


export const ScheduleListItemContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const ScheduleListItemView = styled.div`
	width: 100%;
	display: flex;
	background-color: #3D608F;
	height: 140px;
	border-radius: 20px;
	justify-content: space-between;
	box-shadow: 0 5px 20px rgba(1.0, 1.0, 1.0, 0.3);
`;

export const ScheduleTimeItems = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 32px;
	
`;

export const ScheduleTimeItem = styled.div`
	margin: auto 0;
	
`;

export const ScheduleItemRightBlock = styled.div`
  padding: 10px 32px;
	display: flex;
	flex-direction: column;
`;

export const ScheduleItemRightItem = styled.div`
	display: flex;
	margin: auto 0;
`;

export const ScheduleItemRightButton = styled.div`
	margin: 0 auto;
	opacity: 0.5;
	cursor: pointer;
`;

export const ScheduleStatus = styled.div`
	
	border-radius: 50px;
	background-color: ${({ statusColor }) => statusColor};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 14px;
	
`;



export const ScheduleServicesList = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 20px 20px 10px 20px;
`;

export const ArrowBlock = styled.div`
	width: 100%;
	height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
	margin-top: 16px;
  position: absolute;
  bottom: 0;
`;

export const ArrowExpand = styled.div`
  position: relative;
  width: 25px;
  height: 35px;

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


export const ScheduleListViewExpanded = styled.div`
	min-height: 180px;
	width: 100%;
  background-color: #3D608F;
	position: relative;
	top: -140px;
	z-index: -1;
  border-radius: 20px;
  transition: padding-top 0.5s;
	
	${({ enabled }) => enabled ? `padding-top: 150px;` : `padding-top: 0;`}
`;





