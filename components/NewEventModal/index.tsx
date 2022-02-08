import React, { FC, memo, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { Modal } from '../../common/Modal';
import { ModalWindow } from '../../common/Modal/ModalWindow';
import { ModalWindowHeader } from '../../common/Modal/ModalWindowHeader';
import { Event } from '../../redux/reducer-calendar/types';
import { ColorPicker } from '../../common/ColorPicker';
import { NewEventActions } from './NewEventActions';
import { NewEventDescription } from './NewEventDescription';
import { NewEventTitle } from './NewEventTitle';
import { NewEventTypes } from './NewEventTypes';

interface Props {
    date: string;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (event: Event) => void;
}

export const NewEventModal: FC<Props> = memo(({ isOpen, date, onClose, onSubmit }) => {
    const [selectedEventType, setSelectedEventType] = useState<Event['eventType']>('event');
    const [eventColor, setEventColor] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const onSubmitHandler = () => {
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

    return (
        <Modal isOpen={isOpen}>
            <ModalWindow>
                <ModalWindowHeader onClose={onClose}>
                    <NewEventTitle
                        value={title}
                        onChange={setTitle}
                        selectedEventType={selectedEventType} />

                    <NewEventTypes
                        onSubmit={setSelectedEventType}
                        selected={selectedEventType} />
                </ModalWindowHeader>

                <NewEventDescription
                    value={description}
                    onChange={setDescription}
                    selectedEventType={selectedEventType} />

                <ColorPicker
                    eventColor={eventColor}
                    selectedEventType={selectedEventType}
                    onSubmit={setEventColor} />

                <NewEventActions
                    disabled={!title}
                    onClose={onClose}
                    onSubmit={onSubmitHandler}
                    selectedEventType={selectedEventType} />
            </ModalWindow>
        </Modal>
    )
});
