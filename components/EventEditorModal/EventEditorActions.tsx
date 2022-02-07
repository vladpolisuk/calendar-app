import React, { FC } from 'react';
import styled from 'styled-components';

const EventEditorActionsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const EditEventButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    margin-right: 5px;
    background-color: #356e45;
    color: white;
    font-size: 16px;
`;

const DismissEventButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    background-color: #525667;
    color: white;
    margin-right: 5px;
`;

const DeleteEventButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    background-color: #973333;
    color: white;   
`;

interface Props {
    onSubmit: () => void;
    onClose: () => void;
    onDelete: () => void;
    selectedEventType?: string;
}

export const EventEditorActions: FC<Props> = ({ onSubmit, onClose, onDelete, selectedEventType }) => {
    return (
        <EventEditorActionsStyled>
            <EditEventButtonStyled
                type="submit"
                onClick={onSubmit}
                aria-label={`Edit ${selectedEventType}`}>
                Edit {selectedEventType}
            </EditEventButtonStyled>

            <DismissEventButtonStyled
                onClick={onClose}
                aria-label={`Dismiss editing ${selectedEventType}`}>
                Dismiss
            </DismissEventButtonStyled>

            <DeleteEventButtonStyled
                onClick={onDelete}
                aria-label={`Delete ${selectedEventType}`}>
                Delete
            </DeleteEventButtonStyled>
        </EventEditorActionsStyled>
    )
};
