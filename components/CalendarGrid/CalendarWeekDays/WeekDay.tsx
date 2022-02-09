import React, { FC, memo } from 'react';
import styled from 'styled-components';

const WeekDayStyled = styled.li`
    display: flex;
    padding: 15px 8px;
    font-weight: 700;
    color: ${(props: { isActive: boolean }) => props.isActive ? '#95a9ff' : '#e1e1ea'};
    @media (max-width: 500px) {
        font-size: 15px;
        padding: 12px 8px;
    }
    @media (max-width: 421px) {
        font-size: 14px;
    }
`;

interface Props {
    weekDay: string;
    isActive: boolean;
}

export const WeekDay: FC<Props> = memo(({ weekDay, isActive }) => {
    return (
        <WeekDayStyled isActive={isActive}>
            <p>{weekDay}</p>
        </WeekDayStyled>
    )
})
