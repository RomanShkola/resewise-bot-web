import styled from "styled-components";

export const ScheduleAddViewContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
	justify-content: space-between;
`;

export const TimePickerContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 30px;
	
	> div {
		margin-bottom: 20px;
	}
`;

export const ServicesContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 30px;
`;

export const ServicesTop = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const ServicesTitle = styled.div`
	
`;

export const ServicesSelectionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TopContentWrapper = styled(ContentWrapper)`
	height: 100%;
`;



