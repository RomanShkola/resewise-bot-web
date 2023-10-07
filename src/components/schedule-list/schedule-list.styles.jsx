import styled from "styled-components";
import {MonthYearHeaderArrow} from "../calendar/calendar.styles";


export const ScheduleListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	
`;

export const ScheduleListView = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
  position: relative;
	z-index: 1;
`;

export const AddScheduleButton = styled.div`
	height: 80px;
	width: 80px;
	background-color: #4E91CE;
	border: 2px solid #3D608F;
	border-radius: 50px;
	position: absolute;
	bottom: 20px;
	cursor: pointer;
`;

export const AddButtonArrow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:before,
  &:after {
    content: "";
    border-radius: 0.2rem;
    display: block;
    background-color: white;
    opacity: 0.8;
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 1px);
    transform: translateY(-50%) translateX(-50%);
  }
	
  &:before,
  &:after {
    height: 20px;
    width: 2px;
  }
	
  &:before {
    transform: rotate(90deg);
  }

  &:after {
    transform: rotate(-180deg);
  }
	
`;
