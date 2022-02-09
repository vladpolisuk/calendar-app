import React, { FC } from 'react';
import styled from 'styled-components';

const ThereAreEventsCircleStyled = styled.div`
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: none;
    align-items: center;
    justify-content: center;
    background: #414554;
    color: #c7d2df;
    @media (max-width: 600px) {
        display: flex;
    }
`;

interface Props {
    eventCount: number;
}

export const ThereAreEventsCircle: FC<Props> = ({ eventCount = 0 }) => {
    return eventCount ? (
        <ThereAreEventsCircleStyled>
            {eventCount}
        </ThereAreEventsCircleStyled>
    ) : null
};
