import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { setCurrentDaysOfCalendar } from '../../../redux/reducer-calendar/actions';
import { getCurrentDate, getCurrentDaysOfCalendar, getShowingDate } from '../../../redux/reducer-calendar/selectors';
import { CalendarDay } from './CalendarDay';

const CalendarGridStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, minmax(100px, 156px));
    grid-template-rows: repeat(5, 130px);
    grid-gap: 2px;
`;

export const CalendarDays = () => {
    const daysOfCalendar = useAppSelector(getCurrentDaysOfCalendar);
    const currentDate = useAppSelector(getCurrentDate);
    const showingDate = useAppSelector(getShowingDate)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (showingDate) dispatch(setCurrentDaysOfCalendar(showingDate));
    }, [dispatch, showingDate])

    const components = useMemo(() => {
        return daysOfCalendar.map(({ date }) => {
            const key = `${date}_${Math.random() * Math.random()}`;
            const monthNumber = date.split('-')[0];
            const showingMonth = showingDate.split('-')[0];
            const isCurrentDay = date === currentDate;
            const isAnotherMonth = monthNumber !== showingMonth;

            return <CalendarDay
                key={key}
                date={date}
                isAnotherMonth={isAnotherMonth}
                isActive={isCurrentDay} />
        })
    }, [daysOfCalendar, currentDate])

    return (
        <CalendarGridStyled>
            {components}
        </CalendarGridStyled>
    )
};
