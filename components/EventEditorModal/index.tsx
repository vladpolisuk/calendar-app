import React, { FC, memo, useEffect, useState } from 'react';
import { Modal } from '../../common/Modal';
import { ModalWindow } from '../../common/Modal/ModalWindow';
import { ModalWindowHeader } from '../../common/Modal/ModalWindowHeader';
import { ChangedEventData, Event } from '../../redux/reducer-calendar/types';
import { ColorPicker } from '../../common/ColorPicker';
import { EventEditorActions } from './EventEditorActions';
import { EventEditorDescription } from './EventEditorDescription';
import { EventEditorTitle } from './EventEditorTitle';

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

    const onSubmitHandler = () => {
        onSubmit(values.eventId, { eventTitle, eventDescription, eventColor })
        onClose();
    }

    const onDeleteHandler = () => {
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

    return (
        <Modal isOpen={isOpen}>
            <ModalWindow>
                <ModalWindowHeader onClose={onClose}>
                    <EventEditorTitle
                        value={eventTitle}
                        onChange={setEventTitle}
                        initialValue={values.eventTitle} />
                </ModalWindowHeader>

                <EventEditorDescription
                    value={eventDescription}
                    onChange={setEventDescription}
                    initialValue={values.eventDescription} />

                <ColorPicker
                    onSubmit={setEventColor}
                    eventColor={eventColor}
                    initialColor={values.eventColor}
                    selectedEventType={values.eventType} />

                <EventEditorActions
                    onClose={onClose}
                    onSubmit={onSubmitHandler}
                    onDelete={onDeleteHandler}
                    selectedEventType={values.eventType} />
            </ModalWindow>
        </Modal>
    )
});
