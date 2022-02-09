import React, { ChangeEventHandler, FC, memo } from 'react';
import styled from 'styled-components';

const NewEventTitleStyled = styled.input`
    outline: none;
    margin-right: 10px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #ffffff3b;
    color: white;
    font-size: 20px;
    width: 100%;
    padding: 4px;
    overflow: hidden;
    transition: 100ms;
    font-family: 'Inter', sans-serif;
    &:focus {
        border-color: white;
    }
    @media (max-width: 500px) {
        margin-bottom: 10px;
    }
`;

interface Props {
    onChange: (data: any) => void;
    selectedEventType: string;
    value: string;
};

export const NewEventTitle: FC<Props> = memo(({ onChange, selectedEventType, value }) => {
    const onTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault()
        onChange(event.target.value);
    }

    return (
        <NewEventTitleStyled
            value={value}
            onChange={onTitleChange}
            placeholder='Add title ...'
            aria-label={`Write ${selectedEventType} title`} />
    )
});
