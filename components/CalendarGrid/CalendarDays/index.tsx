import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { createNewEvent, deleteEventById, editEventById, setCurrentDaysOfCalendar } from '../../../redux/reducer-calendar/actions';
import { getCurrentDate, getCurrentDaysOfCalendar, getShowingDate } from '../../../redux/reducer-calendar/selectors';
import { ChangedEventData, Event } from '../../../redux/reducer-calendar/types';
import { EventEditorModal } from '../../EventEditorModal';
import { NewEventModal } from '../../NewEventModal';
import { CalendarDay } from './CalendarDay';

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
    const [newEventModalIsOpen, setNewEventModalIsOpen] = useState(false);
    const [eventEditorIsOpen, setEventEditorIsOpen] = useState(false);
    const [eventEditorValues, setEventEditorValues] = useState({} as Event);
    const [modalDate, setModalDate] = useState('');

    const onSubmitNewEvent = (event: Event) => {
        dispatch(createNewEvent(event));
    }

    const openNewEventModal = (date: string) => {
        setModalDate(date)
        setNewEventModalIsOpen(true);
    }

    const closeNewEventModal = () => {
        setNewEventModalIsOpen(false);
    }

    const onSubmitChangedEvent = (eventId: string, event: ChangedEventData) => {
        dispatch(editEventById(eventId, event));
    }

    const onDeleteEvent = (eventId: string) => {
        dispatch(deleteEventById(eventId));
    }

    const openEventEditor = (event: Event) => {
        setEventEditorValues(event)
        setEventEditorIsOpen(true)
    }

    const closeEventEditor = () => {
        setEventEditorIsOpen(false)
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
                isActive={isCurrentDay}
                isAnotherMonth={isAnotherMonth}
                openEventEditor={openEventEditor}
                openNewEventModal={openNewEventModal} />
        })
    }, [daysOfCalendar, currentDate])

    return (
        <CalendarGridStyled>
            {components}
            <NewEventModal
                date={modalDate}
                onSubmit={onSubmitNewEvent}
                isOpen={newEventModalIsOpen}
                onClose={closeNewEventModal} />

            <EventEditorModal
                onDelete={onDeleteEvent}
                values={eventEditorValues}
                isOpen={eventEditorIsOpen}
                onClose={closeEventEditor}
                onSubmit={onSubmitChangedEvent} />
        </CalendarGridStyled>
    )
};
