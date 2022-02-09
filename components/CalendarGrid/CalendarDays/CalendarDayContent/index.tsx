import React, { FC, Fragment, memo } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { Event } from '../../../../redux/reducer-calendar/types';
import { CalendarEvent } from './CalendarEvent';
import { ThereAreEventsCircle } from './ThereAreEventsCircle';

const CalendarDayContentStyled = styled.ul`
    width: 100%;
    @media (max-width: 600px) {
        display: none;
    }
`;

interface Props {
    events: Event[];
    reminders: Event[];
    tasks: Event[];
    dayDate: string;
    openEventEditor: (event: Event) => void;
}

export const CalendarDayContent: FC<Props> = memo(({
    events,
    tasks,
    reminders,
    openEventEditor,
}) => {
    const eventsComponents = events.map((event) => {
        return <CalendarEvent
            key={uniqid(`${event.eventId}_`)}
            openEventEditor={openEventEditor}
            {...event} />
    })

    const tasksComponents = tasks.map((event) => {
        return <CalendarEvent
            key={uniqid(`${event.eventId}_`)}
            openEventEditor={openEventEditor}
            {...event} />
    })

    const remindersComponents = reminders.map((event) => {
        return <CalendarEvent
            key={uniqid(`${event.eventId}_`)}
            openEventEditor={openEventEditor}
            {...event} />
    })

    const components = [...remindersComponents, ...tasksComponents, ...eventsComponents];
    const last4Events = components.slice(-4).reverse();

    return (
        <Fragment>
            <CalendarDayContentStyled>
                {last4Events}
            </CalendarDayContentStyled>
            <ThereAreEventsCircle eventCount={components.length} />
        </Fragment>
    )
})