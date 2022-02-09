import moment from 'moment';
import React, { MouseEventHandler } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { setShowingDate } from '../../../redux/reducer-calendar/actions';
import { getCurrentDate, getShowingDate } from '../../../redux/reducer-calendar/selectors';
import { fromCurrentDateToShowingDate } from '../../../utils/fromCurrentDateToShowingDate';
import { fromShowingDateToCurrentDate } from '../../../utils/fromShowingDateToCurrentDate';
import { HeaderAction } from './HeaderAction';

const HeaderActionsStyled = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderActions = () => {
    const showingDate = useAppSelector(getShowingDate);
    const currentDate = useAppSelector(getCurrentDate);
    const dispatch = useAppDispatch();

    const prevMonthAction: MouseEventHandler<HTMLLIElement> = (event) => {
        const currentDate = fromShowingDateToCurrentDate(showingDate);
        const prevMonth = moment(currentDate).add(-1, 'month').format('MM-YYYY');
        dispatch(setShowingDate(prevMonth))
    }

    const nextMonthAction: MouseEventHandler<HTMLLIElement> = (event) => {
        const currentDate = fromShowingDateToCurrentDate(showingDate);
        const nextMonth = moment(currentDate).add(1, 'month').format('MM-YYYY');
        dispatch(setShowingDate(nextMonth))
    }

    const todayAction: MouseEventHandler<HTMLLIElement> = (event) => {
        const today = fromCurrentDateToShowingDate(currentDate);
        dispatch(setShowingDate(today))
    }

    return (
        <HeaderActionsStyled>
            <HeaderAction
                text='Prev Month'
                action={prevMonthAction}
                icon={<FaCaretLeft />}
                position="left" />

            <HeaderAction
                text='Today'
                position='center'
                action={todayAction} />

            <HeaderAction
                text='Next Month'
                action={nextMonthAction}
                icon={<FaCaretRight />}
                position="right" />
        </HeaderActionsStyled>
    )
};
