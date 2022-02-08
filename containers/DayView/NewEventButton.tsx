import React, { FC } from 'react';
import styled from 'styled-components';
import { EventTypes } from '../../redux/reducer-calendar/types';

const NewEventButtonStyled = styled.button`
    width: 100%;
    border-radius: 3px;
    border: 2px solid #54545d;
    padding: 8px;
    font-size: 15px;
    background: transparent;
    color: #54545d;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover { color: #bababa; border-color: #bababa; };
`;

interface Props {
    eventType: EventTypes;
    onClick: (initialEventType: EventTypes) => void;
}

export const NewEventButton: FC<Props> = ({ onClick, eventType }) => {
    return (
        <NewEventButtonStyled onClick={() => onClick(eventType)}>
            + Add item
        </NewEventButtonStyled>
    );
};
