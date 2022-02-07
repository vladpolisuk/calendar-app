import React, { FC, memo, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Event } from '../../redux/reducer-calendar/types';

const NewEventTypesStyled = styled.div`
    display: flex;
`;

const NewEventTypeStyled = styled.button`
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

export const NewEventTypes: FC<Props> = memo(({ onSubmit, selected }) => {
    const setEventType: MouseEventHandler<HTMLButtonElement> = (event) => {
        const target = event.target as HTMLButtonElement;
        onSubmit((target.name as Event['eventType']));
    }

    return (
        <NewEventTypesStyled>
            <NewEventTypeStyled
                name="event"
                onClick={setEventType}
                aria-label="Choose 'event' variant"
                isSelected={selected === 'event'}>
                Event
            </NewEventTypeStyled>

            <NewEventTypeStyled
                name="task"
                onClick={setEventType}
                aria-label="Choose 'task' variant"
                isSelected={selected === 'task'}>
                Task
            </NewEventTypeStyled>

            <NewEventTypeStyled
                name="reminder"
                onClick={setEventType}
                aria-label="Choose 'reminder' variant"
                isSelected={selected === 'reminder'}>
                Reminder
            </NewEventTypeStyled>
        </NewEventTypesStyled>
    )
});
