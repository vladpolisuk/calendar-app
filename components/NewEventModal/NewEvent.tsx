import React, { FC, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { Event } from '../../redux/reducer-calendar/types';
import { ColorPicker } from '../ColorPicker';
import { ModalCloseButton } from '../ModalCloseButton';
import { NewEventActions } from './NewEventActions';
import { NewEventDescription } from './NewEventDescription';
import { NewEventTitle } from './NewEventTitle';
import { NewEventTypes } from './NewEventTypes';

const NewEventAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale(1.1);
    } to {
        opacity: 1;
        transform: scale(1);
    }
`;

const NewEventModalContentStyled = styled.div`
    max-width: 500px;
    width: 100%;
    background-color: #2d2f3a;
    border-radius: 10px;
    animation: ${NewEventAnimation} 50ms linear both;
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

const NewEventFormStyled = styled.form`
    padding: 15px;
    padding-top: 0;
    width: 100%;
    padding-bottom: 18px;
`;

interface Props {
    onClose: () => void;
    onSubmit: () => void;
    title: string;
    description: string
    eventColor: string
    selectedEventType: Event['eventType'];
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setEventColor: (eventColor: string) => void;
    setSelectedEventType: (selectedEventType: Event['eventType']) => void;
}

export const NewEvent: FC<Props> = memo(({
    onSubmit,
    onClose,
    title,
    description,
    eventColor,
    selectedEventType,
    setTitle,
    setDescription,
    setEventColor,
    setSelectedEventType
}) => {
    return (
        <NewEventModalContentStyled>
            <NewEventModalContentHeaderStyled>
                <FormHeaderActionsStyled>
                    <NewEventTitle
                        value={title}
                        onChange={setTitle}
                        selectedEventType={selectedEventType} />

                    <NewEventTypes
                        onSubmit={setSelectedEventType}
                        selected={selectedEventType} />
                </FormHeaderActionsStyled>

                <ModalCloseButton onClick={onClose} />
            </NewEventModalContentHeaderStyled>

            <NewEventFormStyled>
                <NewEventDescription
                    value={description}
                    onChange={setDescription}
                    selectedEventType={selectedEventType} />

                <ColorPicker
                    eventColor={eventColor}
                    selectedEventType={selectedEventType}
                    onSubmit={setEventColor} />

                <NewEventActions
                    onSubmit={onSubmit}
                    onClose={onClose}
                    disabled={!title}
                    selectedEventType={selectedEventType} />
            </NewEventFormStyled>
        </NewEventModalContentStyled>
    )
});
