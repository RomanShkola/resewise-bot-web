import {
	CalendarContainer,
	DaysOfWeekHeader,
	DaysOfWeekHeaderItem,
	DaysOfWeekItem,
	DaysOfWeekRow,
	WeeksWrapper,
	MonthYearHeader,
	MonthYearHeaderArrowNext,
	MonthYearHeaderArrowPrev,
	MonthYearHeaderLabel,
	MonthYearHeaderSpace,
	MonthYearHeaderSpaceLeft,
	DaysWrapper,
	HeaderButtonsRight,
	HeaderButtonsLeft, SVGWrapper, HeaderButton
} from "./calendar.styles";
import {DateTime} from "luxon";
import {useState} from "react";


const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Calendar = ({dateTime}) => {

	const [currentDatetime, setCurrentDatetime] = useState(dateTime);
	const [selection, setSelection] = useState({start: null, end: null});


	const monthValues = generateMonth(currentDatetime, selection);


	return (
		<CalendarContainer>
			<MonthYearHeader>
				<MonthYearHeaderSpaceLeft>
					<MonthYearHeaderArrowPrev onClick={() => {
						setCurrentDatetime(currentDatetime.minus({month: 1}))
					}}/></MonthYearHeaderSpaceLeft>
				<MonthYearHeaderLabel>{
					`${currentDatetime.toFormat('MMMM')} ${currentDatetime.toFormat('yyyy')}`
				}</MonthYearHeaderLabel>
				<MonthYearHeaderSpace>
					<HeaderButtonsRight>
						<MonthYearHeaderArrowNext onClick={() => {
							setCurrentDatetime(currentDatetime.plus({month: 1}))
						}}/>
					</HeaderButtonsRight>
					<HeaderButtonsLeft>
					</HeaderButtonsLeft>
				</MonthYearHeaderSpace>
			</MonthYearHeader>
			<WeeksWrapper>
				<DaysOfWeekHeader>
					{DAYS.map(day => <DaysOfWeekHeaderItem key={day}>{day}</DaysOfWeekHeaderItem>)}
				</DaysOfWeekHeader>
				<DaysWrapper>
					{
						monthValues.map(
							row => (
								<DaysOfWeekRow>
									{row.map(item => <DaysOfWeekItem
										onClick={() => {
											const dt = item.date;
											if (selection.start && selection.start.equals(dt)) {
												setSelection({start: null, end: null})
												return;
											}
											if (!selection.start || selection.end) {
												setSelection({start: dt, end: null})
											} else {
												setSelection({...selection, end: dt})
											}
										}}

										$selectable={item.selectable}
										selected={item.selected}
										selStart={item.isSelectionStart}
										selHasEnd={!!selection.end}
										selEnd={item.isSelectionEnd}
									>
										{item.date.day}
									</DaysOfWeekItem>)}
								</DaysOfWeekRow>
							)
						)
					}
				</DaysWrapper>
			</WeeksWrapper>
		</CalendarContainer>
	)
}

const generateMonth = (dt, selection) => {

	const values = [];
	const currentMonth = dt.month;
	const startOfMonth = dt.startOf('month');
	const prevDays = (startOfMonth.weekday !== 0 ? startOfMonth.weekday - 1 : 6);

	let dtDay = startOfMonth.minus({days: prevDays});
	let i = 0;


	while (i < 6 * 7) {
		if (i % 7 === 0) {
			values.push([]);
		}
		const last = values[values.length - 1];

		last.push({
			date: dtDay,
			selectable: dtDay.month === currentMonth,
			isSelectionStart: selection.start?.equals(dtDay),
			isSelectionEnd: selection.end?.equals(dtDay),
			selected: selection.start?.diff(dtDay, 'days').days <= 0 && selection.end?.diff(dtDay, 'days').days >= 0
				|| (selection.start?.equals(dtDay) && !selection.end)
		});
		dtDay = dtDay.plus({days: 1});
		i++;
	}

	return values;
}
export default Calendar;
