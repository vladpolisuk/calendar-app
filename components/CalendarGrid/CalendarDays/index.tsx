import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { createNewEvent, setCurrentDaysOfCalendar } from '../../../redux/reducer-calendar/actions';
import { getCurrentDate, getCurrentDaysOfCalendar, getShowingDate } from '../../../redux/reducer-calendar/selectors';
import { Event } from '../../../redux/reducer-calendar/types';
import { CalendarDay } from './CalendarDay';
import { CalenderDayNewEventModal } from './CalendarDayNewEventModal.tsx';

const CalendarGridStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, minmax(100px, 156px));
    grid-template-rows: repeat(5, 140px);
    grid-gap: 2px;
`;

export const CalendarDays = () => {
    const daysOfCalendar = useAppSelector(getCurrentDaysOfCalendar);
    const currentDate = useAppSelector(getCurrentDate);
    const showingDate = useAppSelector(getShowingDate)
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [modalDate, setModalDate] = useState('');

    const onSubmitNewEvent = (event: Event) => {
        dispatch(createNewEvent(event));
    }

    const openNewEventModal = (date: string) => {
        setModalDate(date)
        setIsOpen(true);
    }

    const closeNewEventModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        if (showingDate) dispatch(setCurrentDaysOfCalendar(showingDate));
    }, [dispatch, showingDate])

    const components = useMemo(() => {
        return daysOfCalendar.map(({ date, events, tasks, reminders }) => {
            const key = `${date}_${Math.random() * Math.random()}`;
            const monthNumber = date.split('-')[0];
            const showingMonth = showingDate.split('-')[0];
            const isCurrentDay = date === currentDate;
            const isAnotherMonth = monthNumber !== showingMonth;

            return <CalendarDay
                key={key}
                date={date}
                tasks={tasks}
                events={events}
                reminders={reminders}
                isAnotherMonth={isAnotherMonth}
                openNewEventModal={openNewEventModal}
                isActive={isCurrentDay} />
        })
    }, [daysOfCalendar, currentDate])

    return (
        <CalendarGridStyled>
            {components}
            <CalenderDayNewEventModal
                isOpen={isOpen}
                date={modalDate}
                onSubmit={onSubmitNewEvent}
                onClose={closeNewEventModal} />
        </CalendarGridStyled>
    )
};
