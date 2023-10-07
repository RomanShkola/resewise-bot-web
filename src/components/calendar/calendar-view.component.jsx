import React, {useState} from "react";
import {CalendarViewContainer, CalendarViewSlider} from "./calendar-view.styles";
import Calendar from "./calendar.component";
import {DateTime} from "luxon";

const CalendarView = () => {

	const [currentDateTime, setCurrentDateTime] = useState(DateTime.now);

	return (<CalendarViewContainer>
		<CalendarViewSlider>
		{/*<Calendar dateTime={currentDateTime.minus({ months: 1 })}/>*/}
		<Calendar dateTime={currentDateTime}/>
		{/*<Calendar dateTime={currentDateTime.plus({ months: 1 })}/>*/}
		</CalendarViewSlider>
	</CalendarViewContainer>)
}


export default CalendarView;