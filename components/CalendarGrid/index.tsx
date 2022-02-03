import React from 'react';
import styled from 'styled-components';
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
`;

export const CalendarGrid = () => {
    return (
        <CalendarGridStyled>
            <CalendarWeekDays />
            <CalendarDays />
        </CalendarGridStyled>
    );
};
