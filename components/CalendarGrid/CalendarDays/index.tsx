import moment from 'moment';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { setCurrentDate, setCurrentDaysOfCalendar } from '../../../redux/reducer-calendar/actions';
import { getCurrentDate, getCurrentDaysOfCalendar } from '../../../redux/reducer-calendar/selectors';
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
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentDaysOfCalendar());
        dispatch(setCurrentDate());
    }, [dispatch])

    const components = useMemo(() => {
        return daysOfCalendar.map(({ dayNumber, monthNumber, yearNumber }) => {
            const key = `${dayNumber}_${Math.random() * Math.random() * 100}`;
            const isCurrentDay = `${dayNumber}-${monthNumber}-${yearNumber}` === currentDate;
            const isAnotherMonth = monthNumber !== moment().format('MM');

            return <CalendarDay
                key={key}
                dayNumber={dayNumber}
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
