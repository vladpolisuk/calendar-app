import React, { FC, memo } from 'react';
import styled from 'styled-components';

const NewEventActionsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-contentL center;
`;

const CreateEventButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    margin-right: 5px;
    background-color: #356e45;
    color: white;
    font-size: 16px;
    &:disabled {
        background-color: #335c3e;
        color: #ffffff91;
        cursor: auto;
    }
`;

const DismissEventButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    background-color: #525667;
    color: white;
`;

interface Props {
    onSubmit: () => void;
    onClose: () => void;
    disabled: boolean;
    selectedEventType: string;
}

export const NewEventActions: FC<Props> = memo(({ onSubmit, onClose, disabled, selectedEventType }) => {
    return (
        <NewEventActionsStyled>
            <CreateEventButtonStyled
                type="submit"
                onClick={onSubmit}
                disabled={disabled}
                aria-label={`Create ${selectedEventType}`}>
                Create {selectedEventType}
            </CreateEventButtonStyled>

            <DismissEventButtonStyled
                onClick={onClose}
                aria-label={`Dismiss ${selectedEventType}`}>
                Dismiss
            </DismissEventButtonStyled>
        </NewEventActionsStyled>
    )
});
