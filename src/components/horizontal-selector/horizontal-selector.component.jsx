import React, {useEffect, useState} from "react";
import {InnerValue, ScheduleTypeSelector, ScheduleTypeSelectorValue} from "./horizontal-selector.styles";


const HorizontalSelector = ({ values, onSelect, selected }) => {

	const [state, setState] = useState({ id: 0, name: "custom" });

	useEffect(() => {
		const i = values.indexOf(selected);
		if (i > -1) {
			setState({ id: i, name: selected })
		}
	}, [selected]);

	return <ScheduleTypeSelector selectedValue={state.id} num={values.length}>
		{
			values.map((v, index) => <ScheduleTypeSelectorValue
				onClick={() => {
					const selected = { id: index, name: v };
					onSelect(selected.name);
					setState(selected)} }
				key={v}><InnerValue>{v}</InnerValue></ScheduleTypeSelectorValue>)
		}
	</ScheduleTypeSelector>

}

export default HorizontalSelector;