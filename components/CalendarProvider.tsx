import moment from 'moment';
import Head from 'next/head';
import { FC, ReactNode, memo, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { setCurrentDate, setShowingDate } from '../redux/reducer-calendar/actions';
import { getShowingDate } from '../redux/reducer-calendar/selectors';

const CalendarStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

interface CalendarProviderProps {
    children: ReactNode;
}

export const CalendarProvider: FC<CalendarProviderProps> = memo(({ children }) => {
    const dispatch = useAppDispatch();
    const showingDate = useAppSelector(getShowingDate);
    const showingMonth = showingDate ? moment(showingDate, 'MM-YYYY').format('MMMM YYYY') : '';

    useEffect(() => {
        dispatch(setCurrentDate());
        dispatch(setShowingDate(moment().format('MM-YYYY')));
    }, [dispatch])

    return (
        <CalendarStyled>
            <Head>
                <title>Calendar {showingMonth ? `: ${showingMonth}` : ''}</title>
            </Head>
            {children}
        </CalendarStyled>
    )
});

CalendarProvider.displayName = 'CalendarProvider';
