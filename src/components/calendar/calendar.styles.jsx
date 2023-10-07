import styled from "styled-components";


export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 630px;
`;

export const DaysOfWeekRow = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 2px 0;
  flex: 1 1;
`;

export const DaysOfWeekHeader = styled(DaysOfWeekRow)`
  margin: 8px 0;
  padding: 0;
`;

export const WeeksWrapper = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
`;

export const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthYearHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //flex: 1 0;
  margin: 1em;
`;

export const MonthYearHeaderSpace = styled.div`
  display: flex;
  flex: 1 0 25%;
  align-items: center;
  justify-content: space-between;
`;

export const MonthYearHeaderSpaceLeft = styled(MonthYearHeaderSpace)`
  justify-content: flex-end;
`;

export const MonthYearHeaderArrow = styled.div`
  position: relative;
  width: 2.5rem;
  height: 1.6rem;

  &:before,
  &:after {
    content: "";
    border-radius: 0.2rem;
    display: block;
    background-color: white;
    opacity: 0.8;
  }
`;

export const MonthYearHeaderArrowPrev= styled(MonthYearHeaderArrow)`
  
  &:before {
    position: absolute;
    top: 16px;
  }

  &:after {
    position: absolute;
    bottom: 16px;
  }

  &:before,
  &:after {
    left: 10%;
    height: 0.2rem;
    width: 1rem;
  }

  
  &:before,
  &:after {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

`;

export const MonthYearHeaderArrowNext = styled(MonthYearHeaderArrow)`
  &:before {
    position: absolute;
    top: 16px;
  }

  &:after {
    position: absolute;
    bottom: 16px;
  }

  &:before,
  &:after {
    right: 10%;
    height: 0.2rem;
    width: 1rem;
  }


  &:before,
  &:after {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;


export const MonthYearHeaderLabel = styled.div`
  font-weight: bold;
  flex: 1 0 50%;
  text-align: center;
`;

export const DaysOfWeekHeaderItem = styled.li`
  list-style: none;
  padding: 0.5em 0;
  flex: 1 0;
  text-align: center;
`;

export const DaysOfWeekItem = styled.li`
  list-style: none;
  //padding: 0.5em 0;
  flex: 1 0;
  text-align: center;
  position: relative;
  line-height: 2.5;
  ${({selected, selStart, selEnd, selHasEnd}) => selected ? `&:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #5885AF;
    top: 0;
    left: 0;
    z-index: -1;
    
    
    
    ${ !selStart && !selEnd ? `
    ` : selStart && !selHasEnd ? 
        `border-radius: 50%;` : selEnd ? 
        `border-top-right-radius: 50%;
         border-bottom-right-radius: 50%;` :
        `border-top-left-radius: 50%;
         border-bottom-left-radius: 50%;`
    }
  }` : ""}
  ${props => props.$selectable ? `opacity: 1.0;` : `opacity: 0.5;`}
`;

export const HeaderButtonsRight = styled.div`
`;

export const HeaderButtonsLeft = styled.div`
  align-items: center;
  display: flex;
`;
