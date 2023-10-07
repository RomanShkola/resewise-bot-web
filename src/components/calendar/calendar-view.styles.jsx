import styled from "styled-components";

export const CalendarViewContainer = styled.div`
  max-width: 630px;
  text-align: center;
  overflow: scroll;
`;

export const CalendarViewSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
	
	& > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

	}
`;