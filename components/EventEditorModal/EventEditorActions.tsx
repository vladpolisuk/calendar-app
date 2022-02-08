import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../../common/Button';

const EventEditorActionsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
            <Button
                type="submit"
                variant='success'
                onClick={onSubmit}
                aria-label={`Edit ${selectedEventType}`}>
                Edit {selectedEventType}
            </Button>

            <Button
                variant='cancel'
                onClick={onClose}
                aria-label={`Dismiss creating ${selectedEventType}`}>
                Dismiss
            </Button>

            <Button
                variant='delete'
                onClick={onDelete}
                aria-label={`Delete ${selectedEventType}`}>
                Delete
            </Button>
        </EventEditorActionsStyled>
    )
};
