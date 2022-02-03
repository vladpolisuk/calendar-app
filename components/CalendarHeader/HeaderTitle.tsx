import moment from 'moment';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setCurrentMonth, setCurrentYear } from '../../redux/reducer-calendar/actions';
import { getCurrentMonth, getCurrentYear } from '../../redux/reducer-calendar/selectors';

const HeaderTitleStyled = styled.h1`
    font-size: 28px;
    font-weight: 700;
`;

export const HeaderTitle = () => {
    const currentMonth = useAppSelector(getCurrentMonth);
    const currentYear = useAppSelector(getCurrentYear);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentMonth());
        dispatch(setCurrentYear());
    }, [dispatch])

    const currentMonthText = moment.months()[+currentMonth - 1];

    return (
        <HeaderTitleStyled>
            {currentMonthText} {currentYear}
        </HeaderTitleStyled>
    )
};
