import React from 'react';
import styled from 'styled-components';
import { HeaderActions } from './HeaderActions';
import { HeaderTitle } from './HeaderTitle';

const CalendarHeaderStyled = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: #1d1f27;
    color: white;
    margin-bottom: 20px;
    z-index: 4;
`;

export const CalendarHeader = () => {
    return (
        <CalendarHeaderStyled>
            <HeaderTitle />
            <HeaderActions />
        </CalendarHeaderStyled>
    )
};
