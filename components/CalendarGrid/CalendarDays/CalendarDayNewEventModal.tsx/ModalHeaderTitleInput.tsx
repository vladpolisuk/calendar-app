import React, { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';

const TitleInputStyled = styled.input`
    outline: none;
    margin-right: 10px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #ffffff3b;
    color: white;
    font-size: 20px;
    max-width: 180px;
    padding: 4px;
    overflow: hidden;
    transition: 100ms;
    font-family: 'Inter', sans-serif;
    &:focus {
        border-color: white;
    }
`;

interface Props {
    onChange: (data: any) => void;
    selectedEventType: string;
    value: string;
};

export const ModalHeaderTitleInput: FC<Props> = ({ onChange, selectedEventType, value }) => {
    const onTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault()
        onChange(event.target.value);
    }

    return (
        <TitleInputStyled
            value={value}
            onChange={onTitleChange}
            aria-label={`Write ${selectedEventType} title`}
            placeholder='Add title ...' />
    )
};
