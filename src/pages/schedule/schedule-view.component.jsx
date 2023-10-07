import React from "react";
import CalendarView from "../../components/calendar/calendar-view.component";
import {HeaderButton, TopButtonsLeft} from "./schedule-view.styles";
import {ReactComponent as EditIcon} from "../../assets/img/edit.svg";
import {ReactComponent as BinIcon} from "../../assets/img/bin.svg";
import {SVGWrapper} from "../../assets/styles/common";

const ScheduleView = () => {
	return (
		<div style={{padding: 20}}>
			<TopButtonsLeft>
				<HeaderButton onClick={() => {
				}}>
					<SVGWrapper><EditIcon/></SVGWrapper>
				</HeaderButton>
				<HeaderButton>
					<SVGWrapper><BinIcon/></SVGWrapper>
				</HeaderButton>
			</TopButtonsLeft>
			<CalendarView/>
		</div>
	);
}

export default ScheduleView;