import React, { FC, memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import uniqid from 'uniqid';
import { Event } from '../../redux/reducer-calendar/types';
import { ModalWindowOverlay } from '../ModalWindowOverlay';
import { NewEvent } from './NewEvent';

interface Props {
    isOpen: boolean;
    date: string;
    onSubmit: (event: Event) => void;
    onClose: () => void;
}

export const NewEventModal: FC<Props> = memo(({ isOpen, onClose, date, onSubmit }) => {
    const [selectedEventType, setSelectedEventType] = useState<Event['eventType']>('event');
    const [eventColor, setEventColor] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const submit = () => {
        let color;

        if (eventColor) color = eventColor;
        else if (selectedEventType === 'event') color = '#b9b915'
        else if (selectedEventType === 'task') color = '#2c8ad3'
        else color = '#dd9615';

        onSubmit({
            eventId: uniqid('event_#'),
            eventDate: date,
            eventTitle: title,
            eventDescription: description,
            eventType: selectedEventType,
            eventColor: color
        })

        onClose();
    }

    useEffect(() => {
        return () => {
            setEventColor('')
            setDescription('')
            setTitle('')
            setSelectedEventType('event')
        }
    }, [isOpen]);

    return isOpen ? createPortal(
        <ReactFocusLock>
            <ModalWindowOverlay>
                <NewEvent
                    onClose={onClose}
                    onSubmit={submit}
                    title={title}
                    description={description}
                    eventColor={eventColor}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setEventColor={setEventColor}
                    selectedEventType={selectedEventType}
                    setSelectedEventType={setSelectedEventType} />
            </ModalWindowOverlay>
        </ReactFocusLock>,
        document.querySelector('body') as Element
    ) : null;
});
