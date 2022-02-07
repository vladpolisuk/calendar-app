import React, { FC, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChangedEventData, Event } from '../../redux/reducer-calendar/types';
import { ColorPicker } from '../ColorPicker';
import { ModalCloseButton } from '../ModalCloseButton';
import { EventEditorActions } from './EventEditorActions';
import { EventEditorDescription } from './EventEditorDescription';
import { EventEditorTitle } from './EventEditorTitle';

const EventEditorAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale(1.1);
    } to {
        opacity: 1;
        transform: scale(1);
    }
`;

const EventEditorStyled = styled.div`
    max-width: 500px;
    width: 100%;
    background-color: #2d2f3a;
    border-radius: 10px;
    animation: ${EventEditorAnimation} 50ms linear both;
    padding: 20px;
`;

const EventEditorHeaderStyled = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

interface Props extends ChangedEventData {
    initialValues: Event;
    onSubmit: () => void;
    onClose: () => void;
    onDelete: () => void;
    setEventTitle: (title: string) => void;
    setEventDescription: (description: string) => void;
    setEventColor: (color: string) => void;
}

export const EventEditor: FC<Props> = memo(({
    initialValues,
    onSubmit,
    onClose,
    onDelete,
    eventTitle,
    eventDescription,
    eventColor,
    setEventTitle,
    setEventDescription,
    setEventColor
}) => {
    return (
        <EventEditorStyled>
            <EventEditorHeaderStyled>
                <EventEditorTitle
                    value={eventTitle}
                    onChange={setEventTitle}
                    initialValue={initialValues.eventTitle} />

                <ModalCloseButton onClick={onClose} />
            </EventEditorHeaderStyled>

            <EventEditorDescription
                value={eventDescription}
                onChange={setEventDescription}
                initialValue={initialValues.eventDescription} />

            <ColorPicker
                onSubmit={setEventColor}
                eventColor={eventColor}
                initialColor={initialValues.eventColor}
                selectedEventType={initialValues.eventType} />

            <EventEditorActions
                onSubmit={onSubmit}
                onClose={onClose}
                onDelete={onDelete}
                selectedEventType={initialValues.eventType} />

        </EventEditorStyled>
    );
})