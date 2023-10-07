import React, {useState} from "react";
import {
	AddButtonArrow,
	AddScheduleButton,
	ScheduleListContainer,
	ScheduleListView,
} from "./schedule-list.styles";
import ScheduleListItem from "./schedule-list-item.component";

import { useNavigate } from 'react-router-dom';

const ScheduleList = ({items, onEditClick}) => {

	return <><ScheduleListContainer><ScheduleListView>

		{
			items.map(item => <ScheduleListItem onEditClick={onEditClick}  {...item}></ScheduleListItem>)
		}

	</ScheduleListView>
	</ScheduleListContainer>
	</>
}

export default ScheduleList;


