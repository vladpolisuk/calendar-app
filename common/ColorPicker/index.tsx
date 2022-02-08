import React, { FC, memo, MouseEventHandler, useEffect } from 'react';
import styled from 'styled-components';

const NewEventColorPickerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 5px;
    margin-bottom: 20px;
`;

const NewEventColorStyled = styled.button`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
    border: none;
    background-color: ${(props: { color: string, isSelected: boolean }) => props.color};
    transform: ${(props: { color: string, isSelected: boolean }) => props.isSelected ? 'scale(1.1)' : ''};
    opacity: ${(props: { color: string, isSelected: boolean }) => props.isSelected ? '1' : '0.4'};
`;

interface Props {
    onSubmit: (data: any) => void;
    eventColor: string;
    selectedEventType?: string;
    initialColor?: string;
}

export const ColorPicker: FC<Props> = memo(({ onSubmit, selectedEventType, eventColor, initialColor }) => {
    const selectEventColor: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        const target = event.target as HTMLButtonElement;
        onSubmit(target.attributes[0].value);
    }

    useEffect(() => {
        if (initialColor) onSubmit(initialColor)
    }, [])

    return (
        <NewEventColorPickerStyled>
            <NewEventColorStyled
                color="#2c8ad3"
                onClick={selectEventColor}
                aria-label={`Choose blue color for ${selectedEventType}`}
                isSelected={eventColor === '#2c8ad3' || !eventColor} />

            <NewEventColorStyled
                color="#31b131"
                onClick={selectEventColor}
                aria-label={`Choose green color for ${selectedEventType}`}
                isSelected={eventColor === '#31b131' || !eventColor} />

            <NewEventColorStyled
                color="#dd9615"
                onClick={selectEventColor}
                aria-label={`Choose orange color for ${selectedEventType}`}
                isSelected={eventColor === '#dd9615' || !eventColor} />

            <NewEventColorStyled
                color="#d32a2a"
                onClick={selectEventColor}
                aria-label={`Choose red color for ${selectedEventType}`}
                isSelected={eventColor === '#d32a2a' || !eventColor} />

            <NewEventColorStyled
                color="#b9b915"
                onClick={selectEventColor}
                aria-label={`Choose yellow color for ${selectedEventType}`}
                isSelected={eventColor === '#b9b915' || !eventColor} />

            <NewEventColorStyled
                color="#29a199"
                onClick={selectEventColor}
                aria-label={`Choose light blue color for ${selectedEventType}`}
                isSelected={eventColor === '#29a199' || !eventColor} />

            <NewEventColorStyled
                color="white"
                onClick={selectEventColor}
                aria-label={`Choose white color for ${selectedEventType} `}
                isSelected={eventColor === 'white' || !eventColor} />

            <NewEventColorStyled
                color="gray"
                onClick={selectEventColor}
                aria-label={`Choose gray color for ${selectedEventType} `}
                isSelected={eventColor === 'gray' || !eventColor} />
        </NewEventColorPickerStyled>
    )
});
