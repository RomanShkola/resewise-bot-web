import React, {useEffect, useState} from "react";
import {
	ContentWrapper,
	ScheduleAddViewContainer,
	ServicesContainer, ServicesSelectionContainer, ServicesTitle,
	ServicesTop,
	TimePickerContainer, TopContentWrapper
} from "./schedule-single-edit.styles";
import {Button, RangeLabel, ServiceItem, ViewTitle} from "../../assets/styles/common";
import TimePicker, {meridiems} from "../../components/picker/time-picker.component";
import ServiceTimePicker from "../../components/picker/service-time-picker.component";
import {updateSelected} from "../../utils/functions";
import {useLocation} from "react-router-dom";
import {DateTime} from "luxon";

const ScheduleEditView = () => {

	const location = useLocation();

	const services = [{
		id: 1, name: "Service1", price: 12
	}, {id: 2, name: "Service2", price: 30}];


	const [data, setData] = useState({start: null, end: null, interval: {value: 5, units: 'mins'}})
	const [selectedServices, setSelectedServices] = useState({});

	console.log(data)

	useEffect(() => {
		if (location.state) {
			setData({
				...data,
				start: formatTime(new DateTime(location.state.start)),
				end: formatTime(new DateTime(location.state.end)),
			});
			const selected = {};
			location.state.services.forEach(service => selected[service.id] = true);
			setSelectedServices(selected)
		}
	}, []);

	const selectedAll = Object.keys(selectedServices).length === services.length;


	return <ScheduleAddViewContainer>
		<TopContentWrapper>
			<ViewTitle>New Schedule</ViewTitle>
			<RangeLabel>time range</RangeLabel>
			<TimePickerContainer>
				<TimePicker
					interval={data.interval}
					onChange={(value) => setData({...data, start: value})}
					label="Start Time"
					{ ...data.start}
				/>
				<TimePicker
					interval={data.interval}
					onChange={(value) => setData({...data, end: value})}
					label="End Time"
					{...data.end}/>
				{/*<ServiceTimePicker onChange={(value) => setTime({...time, interval: value})} label="Work Time"/>*/}
			</TimePickerContainer>
			{/*<Button type="yellow" size="full">Add Breaks</Button>*/}
			<ServicesContainer>
				<ServicesTop>
					<ServicesTitle>Services</ServicesTitle>
					<Button onClick={() => {
						if (Object.keys(selectedServices).length === services.length) {
							setSelectedServices({})
							return;
						}
						setSelectedServices(services.reduce((object, key) => {
							object[key.id.toString()] = true
							return object
						}, {}));
					}}>{selectedAll ? 'Unselect All' : 'Select All'}</Button>
				</ServicesTop>
				<ServicesSelectionContainer>
					{
						services.map(service => <ServiceItem
							onClick={() => {
								const updated = updateSelected(selectedServices, service.id.toString(), selectedAll);
								setSelectedServices(updated);
							}}
							$selectable={true}
							$selected={selectedServices[service.id] || selectedAll}
						>{service.name}</ServiceItem>)
					}
				</ServicesSelectionContainer>
			</ServicesContainer>
		</TopContentWrapper>
		<ContentWrapper>
			<Button onClick={() => {}} size="full" type="green">Save</Button>
		</ContentWrapper>
	</ScheduleAddViewContainer>
}

const formatTime = (dt) => {
	console.log(dt?.hour, dt?.minute)
	return {
		hours: dt?.hour % 12,
		mins: dt?.minute,
		a: meridiems.indexOf(DateTime.fromISO(dt.toISO()).toFormat('a'))
	}
}

export default ScheduleEditView;