import React, { FC } from 'react';
import styled from 'styled-components';

const WeekDayStyled = styled.li`
    display: flex;
    padding: 15px 8px;
    font-weight: 700;
    color: ${(props: { isActive: boolean }) => props.isActive ? '#95a9ff' : '#e1e1ea'};
`;

interface Props {
    weekDay: string;
    isActive: boolean;
}

export const WeekDay: FC<Props> = ({ weekDay, isActive }) => {
    return (
        <WeekDayStyled isActive={isActive}>
            <p>{weekDay}</p>
        </WeekDayStyled>
    )
};
