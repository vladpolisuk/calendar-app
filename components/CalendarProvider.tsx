import moment from 'moment';
import { FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/store';
import { setCurrentDate, setShowingDate } from '../redux/reducer-calendar/actions';

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

export const CalendarProvider: FC<CalendarProviderProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentDate());
        dispatch(setShowingDate(moment().format('MM-YYYY')));
    }, [dispatch])

    return (
        <CalendarStyled>
            {children}
        </CalendarStyled>
    )
};
