import React, { ChangeEventHandler, FC, memo, useEffect } from 'react';
import styled from 'styled-components';

const TitleInputStyled = styled.input`
    outline: none;
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
    margin-right: 10px;
    &:focus {
        border-color: white;
    }
`;

interface Props {
    value: string;
    initialValue: string;
    onChange: (data: any) => void;
};

export const EventEditorTitle: FC<Props> = memo(({ onChange, value, initialValue }) => {
    const onTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault()
        onChange(event.target.value);
    }

    useEffect(() => {
        onChange(initialValue)
    }, [])

    return (
        <TitleInputStyled
            value={value}
            onChange={onTitleChange}
            aria-label='Write new title'
            placeholder='Add title ...' />
    )
});
