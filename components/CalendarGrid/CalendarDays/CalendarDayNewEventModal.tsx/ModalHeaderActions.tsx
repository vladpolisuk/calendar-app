import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Event } from '../../../../redux/reducer-calendar/types';

const ModalHeaderActionsStyled = styled.div`
    display: flex;
`;

const ModalHeaderActionStyled = styled.button`
    background: transparent;
    padding: 5px 8px;
    margin-right: 5px;
    border-radius: 3px;
    border: ${(props: { isSelected: boolean }) => props.isSelected ? '2px solid white' : '2px solid gray'};
    color: ${(props: { isSelected: boolean }) => props.isSelected ? 'white' : 'gray'};
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        color: white;
	    border-color: white;
    }
`;

interface Props {
    onSubmit: (data: Event['eventType']) => void;
    selected: string;
}

export const ModalHeaderActions: FC<Props> = ({ onSubmit, selected }) => {
    const setEventType: MouseEventHandler<HTMLButtonElement> = (event) => {
        const target = event.target as HTMLButtonElement;
        onSubmit((target.name as Event['eventType']));
    }

    return (
        <ModalHeaderActionsStyled>
            <ModalHeaderActionStyled
                name="event"
                onClick={setEventType}
                aria-label="Choose 'event' variant"
                isSelected={selected === 'event'}>
                Event
            </ModalHeaderActionStyled>

            <ModalHeaderActionStyled
                name="task"
                onClick={setEventType}
                aria-label="Choose 'task' variant"
                isSelected={selected === 'task'}>
                Task
            </ModalHeaderActionStyled>

            <ModalHeaderActionStyled
                name="reminder"
                onClick={setEventType}
                aria-label="Choose 'reminder' variant"
                isSelected={selected === 'reminder'}>
                Reminder
            </ModalHeaderActionStyled>
        </ModalHeaderActionsStyled>
    )
};
