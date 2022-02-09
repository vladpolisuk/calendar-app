import moment from 'moment';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { setWeekDays } from '../../../redux/reducer-calendar/actions';
import { getWeekDays } from '../../../redux/reducer-calendar/selectors';
import { WeekDay } from './WeekDay';

const CalendarWeekDaysStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, minmax(40px, 156px));
    grid-gap: 2px;
    width: 100%;
    justify-content: center;
    background: #16171c;
    position: sticky;
    top: 73.6px;
    z-index: 3;
    margin-bottom: 5px;
    @media (max-width: 768px) {
       top: 68px;
    }
    @media (max-width: 500px) {
       top: 60px;
    }
`;

export const CalendarWeekDays = () => {
    const weekDays = useAppSelector(getWeekDays);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setWeekDays())
    }, [dispatch])

    const components = useMemo(() => {
        return weekDays.map((weekDay) => {
            const isActive = weekDay === moment.weekdaysShort()[moment().weekday()];
            return <WeekDay isActive={isActive} weekDay={weekDay} key={weekDay} />
        })
    }, [weekDays]);

    return (
        <CalendarWeekDaysStyled>
            {components}
        </CalendarWeekDaysStyled>
    )
};
