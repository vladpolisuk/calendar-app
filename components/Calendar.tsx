import React from 'react';
import { CalendarGrid } from './CalendarGrid';
import { CalendarHeader } from './CalendarHeader';
import { CalendarLinks } from './CalendarLinks';
import styled from 'styled-components';

const CalendarStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const Calendar = () => {
    return (
        <CalendarStyled>
            <CalendarHeader />
            <CalendarGrid />
            <CalendarLinks />
        </CalendarStyled>
    )
};
