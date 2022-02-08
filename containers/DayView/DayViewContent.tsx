import React, { MouseEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';
import { EventEditorModal } from '../../components/EventEditorModal';
import { NewEventModal } from '../../components/NewEventModal';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { createNewEvent, deleteEventById, editEventById } from '../../redux/reducer-calendar/actions';
import { ChangedEventData, Event, EventTypes } from '../../redux/reducer-calendar/types';
import { setDayEvents } from '../../redux/reducer-day/actions';
import { getDayDate, getDayEvents } from '../../redux/reducer-day/selectors';
import { ContentSection } from './ContentSection';
import { SectionEvent } from './ContentSection/SectionEvent';
import { SectionEventContent } from './ContentSection/SectionEventContent';
import { SectionEventHeader } from './ContentSection/SectionEventHeader';
import { NewEventButton } from './NewEventButton';

const DayViewContentStyled = styled.div`
    padding: 0 40px;
    margin-right: 10px;
`;

export const DayViewContent = () => {
    const date = useAppSelector(getDayDate);
    const events = useAppSelector(getDayEvents);
    const [isOpenNewEventModal, setIsOpenNewEventModal] = useState(false);
    const [isOpenEditEventModal, setIsOpenEditEventModal] = useState(false);
    const [eventEditorValues, setEventEditorValues] = useState({} as Event);
    const [initialEventType, setInitialEventType] = useState({} as EventTypes);
    const dispatch = useAppDispatch();

    const newEventHandler = (initialEventType: EventTypes) => {
        setInitialEventType(initialEventType)
        setIsOpenNewEventModal(true)
    }

    const onCloseNewEventModal = () => {
        setIsOpenNewEventModal(false)
    }

    const onSubmitNewEvent = (event: Event) => {
        dispatch(createNewEvent(event));
        onCloseNewEventModal();
    }

    const onSubmitChangedEvent = (eventId: string, event: ChangedEventData) => {
        dispatch(editEventById(eventId, event));
    }

    const onDeleteEvent = (eventId: string) => {
        dispatch(deleteEventById(eventId));
    }

    const openEventEditor = (event: Event) => {
        setEventEditorValues(event)
        setIsOpenEditEventModal(true)
    }

    const closeEventEditor = () => {
        setIsOpenEditEventModal(false)
    }

    const eventsEvents = events.filter((event) => event.eventType === 'event');
    const eventsTasks = events.filter((event) => event.eventType === 'task');
    const eventsReminders = events.filter((event) => event.eventType === 'reminder');

    const eventsComponents = eventsEvents.map((event) => (
        <SectionEvent key={event.eventId} color={event.eventColor}>
            <SectionEventHeader
                event={event}
                openEventEditor={openEventEditor}>
                {event.eventTitle}
            </SectionEventHeader>
            <SectionEventContent>
                {event.eventDescription}
            </SectionEventContent>
        </SectionEvent>
    ))

    const tasksComponents = eventsTasks.map((event) => (
        <SectionEvent key={event.eventId} color={event.eventColor}>
            <SectionEventHeader
                event={event}
                openEventEditor={openEventEditor}>
                {event.eventTitle}
            </SectionEventHeader>
            <SectionEventContent>
                {event.eventDescription}
            </SectionEventContent>
        </SectionEvent>
    ))

    const remindersComponents = eventsReminders.map((event) => (
        <SectionEvent key={event.eventId} color={event.eventColor}>
            <SectionEventHeader
                event={event}
                openEventEditor={openEventEditor}>
                {event.eventTitle}
            </SectionEventHeader>
            <SectionEventContent>
                {event.eventDescription}
            </SectionEventContent>
        </SectionEvent>
    ))

    useEffect(() => {
        if (date) dispatch(setDayEvents(date));
    }, [date, isOpenNewEventModal, isOpenEditEventModal])

    return (
        <DayViewContentStyled>
            <ContentSection name="Events">
                {eventsComponents}
                <NewEventButton
                    eventType='event'
                    onClick={newEventHandler} />
            </ContentSection>

            <ContentSection name="Tasks">
                {tasksComponents}
                <NewEventButton
                    eventType='task'
                    onClick={newEventHandler} />
            </ContentSection>

            <ContentSection name="Reminders">
                {remindersComponents}
                <NewEventButton
                    eventType='reminder'
                    onClick={newEventHandler} />
            </ContentSection>

            <NewEventModal
                date={date}
                isOpen={isOpenNewEventModal}
                onClose={onCloseNewEventModal}
                onSubmit={onSubmitNewEvent}
                initialValues={{
                    eventColor: '',
                    eventDate: '',
                    eventDescription: '',
                    eventId: '',
                    eventTitle: '',
                    eventType: initialEventType
                }} />

            <EventEditorModal
                onDelete={onDeleteEvent}
                values={eventEditorValues}
                isOpen={isOpenEditEventModal}
                onClose={closeEventEditor}
                onSubmit={onSubmitChangedEvent} />
        </DayViewContentStyled>
    )
};
