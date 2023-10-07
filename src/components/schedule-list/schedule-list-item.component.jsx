import React, {useState} from "react";
import {
	ArrowBlock, ArrowExpand,
	ScheduleItemRightBlock,
	ScheduleItemRightButton,
	ScheduleItemRightItem,
	ScheduleListItemContainer,
	ScheduleListItemView,
	ScheduleListViewExpanded,
	ScheduleServicesList,
	ScheduleStatus,
	ScheduleTimeItem,
	ScheduleTimeItems
} from "./schedule-list-item.styles";
import {ServiceItem, SVGWrapper} from "../../assets/styles/common";
import {ReactComponent as EditIcon} from "../../assets/img/edit.svg";
import {ReactComponent as BinIcon} from "../../assets/img/bin.svg";


const ScheduleListItem = ({id, start: from, end: to, status, services, onEditClick}) => {

	const statusColor = status ? statusColors[status] : statusColors['AVAILABLE'];
	const [showExpanded, setShowExpanded] = useState(false);

	return <ScheduleListItemContainer>
		<ScheduleListItemView onClick={() => setShowExpanded(!showExpanded)}>
			<ScheduleTimeItems>
				<ScheduleTimeItem>{from.toFormat('hh:mm')}</ScheduleTimeItem>
				<ScheduleTimeItem>{to.toFormat('hh:mm')}</ScheduleTimeItem>
			</ScheduleTimeItems>

			<ScheduleItemRightBlock>

				<ScheduleItemRightItem>
					<ScheduleItemRightButton onClick={(e) => { e.stopPropagation(); onEditClick(id) }}>
						<SVGWrapper width={40} height={40}><EditIcon/></SVGWrapper>
					</ScheduleItemRightButton>
					<ScheduleItemRightButton onClick={(e) => { e.stopPropagation() }}>
						<SVGWrapper width={40} height={40}><BinIcon/></SVGWrapper>
					</ScheduleItemRightButton>
					<ScheduleItemRightButton>

					</ScheduleItemRightButton>
				</ScheduleItemRightItem>

				<ScheduleItemRightItem>
					<ScheduleStatus statusColor={statusColor}> { status } </ScheduleStatus>
				</ScheduleItemRightItem>

			</ScheduleItemRightBlock>
		</ScheduleListItemView>
		<ScheduleListViewExpanded enabled={showExpanded}>
			<ScheduleServicesList>
				{
					services.map(service => <ServiceItem>{service.name}</ServiceItem>)
				}
			</ScheduleServicesList>
			<ArrowBlock>
				<ArrowExpand/>
			</ArrowBlock>
		</ScheduleListViewExpanded>
	</ScheduleListItemContainer>

}


export const statusColors = {
	'AVAILABLE': '#45BE57',
	'BREAK': '#D3AA00'
};

export default ScheduleListItem;

