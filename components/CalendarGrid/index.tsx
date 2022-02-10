import moment from 'moment';
import Head from 'next/head';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/store';
import { getCurrentDate, getShowingDate } from '../../redux/reducer-calendar/selectors';
import { CalendarDays } from './CalendarDays';
import { CalendarWeekDays } from './CalendarWeekDays';

const CalendarGridStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 100px;
    width: 100%;
    padding: 0 20px;
    @media (max-width: 600px) {
        padding: 0 10px;
        margin-bottom: 40px;
    }
    @media (max-width: 421px) {
        margin-bottom: 30px;
    }
`;

export const CalendarGrid = () => {
    const showingDate = useAppSelector(getShowingDate);
    const showingMonth = moment.months()[+showingDate.split('-')[0]];

    return (
        <CalendarGridStyled>
            <Head>
                <title>Calendar: {showingMonth}</title>
            </Head>
            <CalendarWeekDays />
            <CalendarDays />
        </CalendarGridStyled>
    );
};
