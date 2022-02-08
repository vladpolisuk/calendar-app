import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/store';
import { setDayDate } from '../../redux/reducer-day/actions';
import { DayViewContent } from './DayViewContent';
import { DayViewHeader } from './DayViewHeader';

const DayViewStyled = styled.div`
    max-width: 800px;
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
`;

export const DayView = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        const routeDate = router.query.dayNumber as string
        if (routeDate) dispatch(setDayDate(routeDate));
    }, [dispatch, router])

    return (
        <DayViewStyled>
            <DayViewHeader />
            <DayViewContent />
        </DayViewStyled>
    )
};
