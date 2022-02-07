import React, { FC, memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import { ChangedEventData, Event } from '../../redux/reducer-calendar/types';
import { ModalWindowOverlay } from '../ModalWindowOverlay';
import { EventEditor } from './EventEditor';

interface Props {
    isOpen: boolean;
    values: Event;
    onClose: () => void;
    onSubmit: (eventId: string, event: ChangedEventData) => void;
    onDelete: (eventId: string) => void
}

export const EventEditorModal: FC<Props> = memo(({ isOpen, values, onSubmit, onClose, onDelete }) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventColor, setEventColor] = useState('');

    const submit = () => {
        onSubmit(values.eventId, { eventTitle, eventDescription, eventColor })
        onClose();
    }

    const deleteEvent = () => {
        onDelete(values.eventId)
        onClose();
    }

    useEffect(() => {
        return () => {
            setEventTitle('')
            setEventDescription('')
            setEventColor('')
        }
    }, [isOpen])

    return isOpen ? createPortal(
        <ReactFocusLock>
            <ModalWindowOverlay>
                <EventEditor
                    initialValues={values}
                    onSubmit={submit}
                    onClose={onClose}
                    onDelete={deleteEvent}
                    eventTitle={eventTitle}
                    eventDescription={eventDescription}
                    eventColor={eventColor}
                    setEventTitle={setEventTitle}
                    setEventDescription={setEventDescription}
                    setEventColor={setEventColor} />
            </ModalWindowOverlay>
        </ReactFocusLock>,
        document.querySelector('body') as Element
    ) : null
});
