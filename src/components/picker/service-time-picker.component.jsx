import React, {useState} from "react";
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


const units = ["mins", "hours"];
const indexUnitMap = arrayToMap(units);
const ServiceTimePicker = ({label, onChange}) => {

	const [time, setTime] = useState({value: 30, units: 0});

	const currentUnits = mapValuesUnits[indexUnitMap[time.units]];

	const onArrowClick = (operation, key, c) => {
		const adder = operation === "plus" ? c : -c;
		const val = time[key];
		let newValue = {};
		if (key === "units") {
			const tmp = Math.max((val + adder) % units.length, 0);
			newValue = { value: mapValuesUnits[indexUnitMap[tmp]].step, [key]: tmp};
		} else {
			newValue = {...time, [key]: Math.max((val + adder) % (mapValuesUnits[indexUnitMap[time.units]].max), c)}
		}
		setTime(newValue);
		onChange(formatSelection(newValue));
	}

	return <PickerContainer>
		<PickerLeftBlock>
			<PickerName>{label}</PickerName>
		</PickerLeftBlock>
		<PickerRightBlock>
			<PickerValueContainer>
				<ArrowWrapper onClick={() => {
					onArrowClick("plus", "value", currentUnits.step)
				}
				}><ArrowUp/></ArrowWrapper>
				<PickerValueWrapper>
					{
						currentUnits.range.map(v => <PickerValue shift={time.value / currentUnits.step - 1}> {v} </PickerValue>)
					}
				</PickerValueWrapper>
				<ArrowWrapper onClick={() => onArrowClick("minus", "value", currentUnits.step)}><ArrowDown/></ArrowWrapper>
			</PickerValueContainer>
			<PickerValueContainer shiftLeft={30}>
				<ArrowWrapper onClick={() => onArrowClick("plus", "units", 1)}><ArrowUp/></ArrowWrapper>
				<PickerValueWrapper>
					{
						units.map(v => <PickerValue shift={time.units}> {v} </PickerValue>)
					}
				</PickerValueWrapper>
				<ArrowWrapper onClick={() => onArrowClick("minus", "units", 1)}><ArrowDown/></ArrowWrapper>
			</PickerValueContainer>

		</PickerRightBlock>

	</PickerContainer>
}

const formatSelection = (time) => {
	return { value: time.value, units: indexUnitMap[time.units] }
}

const mapValuesUnits = {
	"mins": {
		range: [15, 30],
		step: 15,
		max: 45
	},
	"hours": {
		range: range(24, 1),
		step: 1,
		max: 24
	}
}


export default ServiceTimePicker;
