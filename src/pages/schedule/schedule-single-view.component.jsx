import React from "react";
import {ScheduleViewContainer} from "./schedule-single-view.styles";
import ScheduleList from "../../components/schedule-list/schedule-list.component";
import {RangeLabel, ViewTitle} from "../../assets/styles/common";
import {AddButtonArrow, AddScheduleButton} from "../../components/schedule-list/schedule-list.styles";
import {useNavigate} from "react-router-dom";
import {DateTime} from "luxon";

const ScheduleSingleView = () => {

	const navigate = useNavigate();
	const data = [{
		id: 1, start: "2023-10-11 12:00:00", end: "2023-10-11 13:00:00", status: "AVAILABLE", services:
			[{id: 1, name: "Service 1"}, {id: 2, name: "Service 2"}, {id: 3, name: "Service 213321 "}, {
				id: 4,
				name: "Service 213321 "
			},
				{id: 5, name: "Service 213321 "}, {id: 6, name: "Service 213321 "}, {id: 7, name: "Service 213321 "}, {
				id: 8,
				name: "Service 213321 "
			},
				{id: 9, name: "Service 213321 "}]
	}];

	const transformedData = data.map(getTransformedTime);

	console.log(transformedData[0].end.hour)

	return <ScheduleViewContainer>
		<ViewTitle>
			Schedule
		</ViewTitle>
		<RangeLabel>Some date</RangeLabel>
		{/*<HorizontalSelector onSelect={(selected) => console.log(selected)} values={['CUSTOM', 'FULL']}/>*/}
		<ScheduleList
			items={transformedData}
			onEditClick={(selectedId) => {
				console.log(transformedData)
				navigate(`/schedule-edit`, {
				state:
					{
						...(transformedData.find(data =>  {
							console.log(data)
							return data.id === selectedId })),
					}
			})}}
		/>
		<AddScheduleButton onClick={() => {
			navigate('/schedule-edit')
		}}>
			<AddButtonArrow/>
		</AddScheduleButton>
	</ScheduleViewContainer>

}

const getTransformedTime = (data) => {

	return {
		...data,
		start: DateTime.fromSQL(data.start),
		end: DateTime.fromSQL(data.end),
	};
}

export default ScheduleSingleView;
