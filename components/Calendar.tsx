import React, { useEffect } from 'react';
import { CalendarGrid } from './CalendarGrid';
import { CalendarHeader } from './CalendarHeader';
import { CalendarLinks } from './CalendarLinks';
import styled from 'styled-components';
import { setCurrentDate, setShowingDate } from '../redux/reducer-calendar/actions';
import { useAppDispatch } from '../hooks/store';
import moment from 'moment';

const CalendarStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const Calendar = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentDate());
        dispatch(setShowingDate(moment().format('MM-YYYY')));
    }, [dispatch])

    return (
        <CalendarStyled>
            <CalendarHeader />
            <CalendarGrid />
            <CalendarLinks />
        </CalendarStyled>
    )
};
