import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/store';
import { getShowingDate } from '../../redux/reducer-calendar/selectors';

const HeaderTitleStyled = styled.h1`
    font-size: 28px;
    font-weight: 700;
`;

export const HeaderTitle = () => {
    const showingDate = useAppSelector(getShowingDate);
    const currentMonth = showingDate.split('-')[0];
    const currentYear = showingDate.split('-')[1];
    const currentMonthText = moment.months()[+currentMonth - 1];

    return (
        <HeaderTitleStyled>
            {currentMonthText} {currentYear}
        </HeaderTitleStyled>
    )
};
