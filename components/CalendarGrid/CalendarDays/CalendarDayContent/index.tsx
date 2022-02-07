import React, { FC } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { Event } from '../../../../redux/reducer-calendar/types';
import { CalendarEvent } from './CalendarEvent';

const CalendarDayContentStyled = styled.ul`
    width: 100%;
`;

interface Props {
    events: Event[];
    reminders: Event[];
    tasks: Event[];
    dayDate: string;
}

export const CalendarDayContent: FC<Props> = ({ events, tasks, reminders }) => {
    const eventsComponents = events.map(({ eventId, eventColor, eventTitle, eventType }) => {
        const key = uniqid(`${eventId}_`);
        return <CalendarEvent
            key={key}
            bgColor={eventColor}
            title={eventTitle}
            type={eventType} />
    })

    const tasksComponents = tasks.map(({ eventId, eventColor, eventTitle, eventType }) => {
        const key = uniqid(`${eventId}_`);
        return <CalendarEvent
            key={key}
            bgColor={eventColor}
            title={eventTitle}
            type={eventType} />
    })

    const remindersComponents = reminders.map(({ eventId, eventColor, eventTitle, eventType }) => {
        const key = uniqid(`${eventId}_`);
        return <CalendarEvent
            key={key}
            bgColor={eventColor}
            title={eventTitle}
            type={eventType} />
    })

    const components = [...remindersComponents, ...tasksComponents, ...eventsComponents];
    const last4Events = components.slice(-4).reverse();

    return (
        <CalendarDayContentStyled>
            {last4Events}
        </CalendarDayContentStyled>
    )
};
