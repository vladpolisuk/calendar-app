import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { Button } from '../../common/Button';

const NewEventActionsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-contentL center;
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
            <Button
                type="submit"
                disabled={disabled}
                variant="success"
                onClick={onSubmit}
                aria-label={`Create ${selectedEventType}`}>
                Create {selectedEventType}
            </Button>

            <Button
                variant="cancel"
                onClick={onClose}
                aria-label={`Dismiss ${selectedEventType}`}>
                Dismiss
            </Button>
        </NewEventActionsStyled >
    )
});
