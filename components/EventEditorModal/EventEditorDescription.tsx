import React, { ChangeEventHandler, FC, memo, useEffect } from 'react';
import styled from 'styled-components';
import { useAutoResize } from '../../hooks/ui/useAutoResize';

const DescriptionInputStyled = styled.textarea`
    width: 100%;
    min-height: 100px;
    background: #ffffff0d;
    border: none;
    color: white;
    padding: 10px 12px;
    font-size: 16px;
    outline: none;
    resize: none;
    border-radius: 3px;
    transition: 100ms;
    overflow: hidden;
    margin-bottom: 10px;
    font-family: 'Inter', sans-serif;
    &:focus {
        box-shadow: 0 0 0 1px #ffffff1f;
    }
`;

interface Props {
    value: string;
    initialValue: string;
    onChange: (data: any) => void;
}

export const EventEditorDescription: FC<Props> = memo(({ onChange, value, initialValue }) => {
    const autoResize = useAutoResize();

    const onDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        event.preventDefault()
        onChange(event.target.value);
    }

    useEffect(() => {
        onChange(initialValue)
    }, [])

    return (
        <DescriptionInputStyled
            value={value}
            onInput={autoResize}
            onChange={onDescriptionChange}
            aria-label='Write new description'
            placeholder="Add description ..." />
    )
});
