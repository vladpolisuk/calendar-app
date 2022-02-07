/* eslint-disable react/display-name */
import React, { FC, memo, MouseEventHandler, useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { IoMdClose } from 'react-icons/io';
import styled, { css, keyframes } from 'styled-components';
import { ModalDescriptionInput } from './ModalDescriptionInput';
import { ModalHeaderActions } from './ModalHeaderActions';
import { ModalHeaderTitleInput } from './ModalHeaderTitleInput';
import { NewEventColorPicker } from './NewEventColorPicker';
import uniqid from 'uniqid';
import { Event } from '../../../../redux/reducer-calendar/types';

const CalenderDayNewEventModalStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #00000085;
    width: 100%;
    height: 100%;
    z-index: 4;
`;

const NewEvent = keyframes`
    from {
        opacity: 0;
        transform: scale(1.1);
    } to {
        opacity: 1;
        transform: scale(1);
    }
`;

const NewEventModalContentStyled = styled.div`
    width: 500px;
    background-color: #2d2f3a;
    border-radius: 10px;
    animation: ${(props: { isOpen: boolean }) => props.isOpen ? css`${NewEvent} 50ms linear both` : ''};
`;

const NewEventModalContentHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
`;

const FormHeaderActionsStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NewEventModalCloseButtonStyled = styled.button`
    background: transparent;
    border: 2px solid gray;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 3px;
    &:hover {
        color: white;
	    border-color: white;
    }
`;

const NewEventFormStyled = styled.form`
    padding: 15px;
    padding-top: 0;
    width: 100%;
    padding-bottom: 18px;
`;

const NewEventSubmitButtons = styled.div`
    display: flex;
    align-items: center;
    justify-contentL center;
`;

const NewEventCreateEventButton = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    margin-right: 5px;
    background-color: #356e45;
    color: white;
    font-size: 16px;
    &:disabled {
        background-color: #335c3e;
        color: #ffffff91;
        cursor: auto;
    }
`;

const NewEventDismissEventButton = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    background-color: #525667;
    color: white;
`;

interface Props {
    isOpen: boolean;
    date: string;
    onSubmit: (event: Event) => void;
    onClose: () => void;
}

export const CalenderDayNewEventModal: FC<Props> = memo(({ isOpen, onClose, date, onSubmit }) => {
    const [selectedEventType, setSelectedEventType] = useState<Event['eventType']>('event');
    const [eventColor, setEventColor] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const submit: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()

        const id = uniqid('event_#');

        let color = eventColor;

        if (!eventColor) {
            color = selectedEventType === 'event'
                ? '#dddd1c'
                : selectedEventType === 'task'
                    ? '#2c8ad3'
                    : '#dd9615';
        }

        onSubmit({
            eventId: id,
            eventDate: date,
            eventTitle: title,
            eventDescription: description,
            eventType: selectedEventType,
            eventColor: color
        })
        onClose();
    }

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto'
            setEventColor('')
            setDescription('')
            setTitle('')
        }
    }, [isOpen]);

    return isOpen ? (
        <FocusLock>
            <CalenderDayNewEventModalStyled>
                <NewEventModalContentStyled isOpen={isOpen}>
                    <NewEventModalContentHeaderStyled>
                        <FormHeaderActionsStyled>
                            <ModalHeaderTitleInput
                                onChange={setTitle}
                                selectedEventType={selectedEventType} />

                            <ModalHeaderActions
                                onSubmit={setSelectedEventType}
                                selected={selectedEventType} />
                        </FormHeaderActionsStyled>

                        <NewEventModalCloseButtonStyled
                            aria-label="Close window"
                            onClick={() => onClose()}>
                            <IoMdClose size="20px" />
                        </NewEventModalCloseButtonStyled>
                    </NewEventModalContentHeaderStyled>

                    <NewEventFormStyled>
                        <ModalDescriptionInput
                            onChange={setDescription}
                            selectedEventType={selectedEventType} />

                        <NewEventColorPicker
                            eventColor={eventColor}
                            selectedEventType={selectedEventType}
                            onSubmit={setEventColor} />

                        <NewEventSubmitButtons>
                            <NewEventCreateEventButton
                                onClick={submit}
                                disabled={!title}
                                aria-label={`Create ${selectedEventType}`}>
                                Create {selectedEventType}
                            </NewEventCreateEventButton>

                            <NewEventDismissEventButton
                                onClick={() => onClose()}
                                aria-label={`Dismiss ${selectedEventType}`}>
                                Dismiss
                            </NewEventDismissEventButton>
                        </NewEventSubmitButtons>
                    </NewEventFormStyled>
                </NewEventModalContentStyled>
            </CalenderDayNewEventModalStyled>
        </FocusLock>
    ) : null;
});
