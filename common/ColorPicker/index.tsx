import { FC, memo, MouseEventHandler, useEffect } from 'react';
import styled from 'styled-components';

interface NewEventColorStyledProps {
    color: string;
    isSelected: boolean;
}

const NewEventColorPickerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 5px;
    margin-bottom: 20px;
`;

const NewEventColorStyled = styled.button<NewEventColorStyledProps>`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
    border: none;
    background-color: ${({ color }) => color};
    transform: ${({ isSelected }) => isSelected ? 'scale(1.1)' : ''};
    opacity: ${({ isSelected }) => isSelected ? '1' : '0.4'};
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

    const colors = [
        "#2c8ad3",
        "#31b131",
        "#dd9615",
        "#d32a2a",
        "#b9b915",
        "#29a199",
        "white",
        "gray"
    ];   

    useEffect(() => {
        if (initialColor) onSubmit(initialColor)
    }, [])

    return (
        <NewEventColorPickerStyled>
            {colors.map(color => (
                <NewEventColorStyled
                    key={color}
                    color={color}
                    onClick={selectEventColor}
                    aria-label={`Choose color for ${selectedEventType}`}
                    isSelected={eventColor === color || !eventColor} />
            ))}
        </NewEventColorPickerStyled>
    )
});
