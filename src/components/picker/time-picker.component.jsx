import React, {useEffect, useState} from "react";
import {
	ArrowDown,
	ArrowUp,
	ArrowWrapper,
	PickerContainer,
	PickerLeftBlock,
	PickerName,
	PickerRightBlock, PickerValue,
	PickerValueContainer, PickerValueWrapper
} from "./picker.styles";
import {arrayToMap, range} from "../../utils/functions";


export const meridiems = ["AM", "PM"];
export const indexMeridiemsMap = arrayToMap(meridiems);
const TimePicker = ({label, onChange, interval, ...selectedTime}) => {

	const [time, setTime] = useState({hours: 0, mins: 0, a: 0 });


	useEffect(() => {
		if (selectedTime) {
			console.log(selectedTime)
			// setTime({ ...selectedTime });
		}
	}, [selectedTime]);
	const onArrowClick = (operation, key) => {
		const int = key === interval.units ? interval.value : 1;
		const adder = operation === "plus" ? int : -int;
		let currVal = time[key];

		const newTime = { ...time, [key]: (currVal + adder) % (max[key] + 1) };
		// if (key === "hours") {
		// 	const meridiemAdder = newTime["hours"] > 11 ? 1 : 0;
		// 	newTime.a = meridiemAdder;
		// }

		setTime(newTime)
		onChange(formatSelection(newTime));
	}

	return <PickerContainer>
		<PickerLeftBlock>
			<PickerName>{label}</PickerName>
		</PickerLeftBlock>
		<PickerRightBlock>
			<PickerValueContainer>
				<ArrowWrapper onClick={() => onArrowClick("plus", "hours")}><ArrowUp/></ArrowWrapper>
				<PickerValueWrapper>
				{
					range(13, 0).map(v => <PickerValue shift={Math.abs(time.hours)}> { formatHours(v) } </PickerValue>)
				}
				</PickerValueWrapper>
				<ArrowWrapper onClick={() => onArrowClick("minus", "hours")}><ArrowDown/></ArrowWrapper>
			</PickerValueContainer>
			<PickerValueContainer>:</PickerValueContainer>
			<PickerValueContainer>
				<ArrowWrapper onClick={() => onArrowClick("plus", "mins")}><ArrowUp/></ArrowWrapper>
				<PickerValueWrapper>
					{
						range(60, 0).map(v => <PickerValue shift={time.mins}> { formatMinutes(v) } </PickerValue>)
					}
				</PickerValueWrapper>
				<ArrowWrapper onClick={() => onArrowClick("minus", "mins")}><ArrowDown/></ArrowWrapper>
			</PickerValueContainer>
			<PickerValueContainer shiftLeft={30}>
				<ArrowWrapper onClick={() => onArrowClick("plus", "a")}><ArrowUp/></ArrowWrapper>
				<PickerValueWrapper>
					{
						meridiems.map(v => <PickerValue shift={time.a}> {v} </PickerValue>)
					}
				</PickerValueWrapper>
				<ArrowWrapper onClick={() => onArrowClick("minus", "a")}><ArrowDown/></ArrowWrapper>
			</PickerValueContainer>

		</PickerRightBlock>

	</PickerContainer>
}

const formatSelection = (time) => {
	return { hours: time.hours, mins: time.mins, units: indexMeridiemsMap[time.a] }
}

const formatMinutes = (mins) => {
	return mins < 10 ? "0" + mins : mins;
}

const formatHours = (hours) => {
	return hours % 12 === 0 ? 12 : hours;
}



const max = {
	"hours": 11,
	"mins": 59,
	"a": 1
}

export default TimePicker;