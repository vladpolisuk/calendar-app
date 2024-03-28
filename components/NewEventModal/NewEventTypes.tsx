import { FC, memo, MouseEventHandler, useEffect } from 'react';
import styled from 'styled-components';
import { EventTypes } from '../../redux/reducer-calendar/types';

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
    onSubmit: (data: EventTypes) => void;
    selected: EventTypes;
    initialValue?: EventTypes;
}

export const NewEventTypes: FC<Props> = memo(({ onSubmit, selected, initialValue }) => {
    const setEventType: MouseEventHandler<HTMLButtonElement> = (event) => {
        const target = event.target as HTMLButtonElement;
        onSubmit((target.name as EventTypes));
    }

    useEffect(() => {
        if (initialValue) onSubmit(initialValue);
    }, [])

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
