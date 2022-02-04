/* eslint-disable react/display-name */
import React, { FC, memo } from 'react';
import styled from 'styled-components';

const CalendarDayStyled = styled.li`
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const CalendarDayButtonStyled = styled.button`
    width: 100%;
    height: 100%;
    padding: 25px 10px 10px 10px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    z-index: 1;
    background: ${(props: { isAnotherMonth: boolean }) => props.isAnotherMonth ? '#1b1d24' : '#24262d'};
    &:hover { background: ${(props: { isAnotherMonth: boolean }) => props.isAnotherMonth ? '#1e2027' : '#282b33'} }
`;

const CalendarDayNumberStyled = styled.button`
    height: 28px;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    width: 29px;
    font-weight: 700;
    letter-spacing: 0.4px;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    line-height: 14px;
    border: none;
    z-index: 2;
    user-select: none;
    color: ${(props: { isActive: boolean }) => props.isActive ? 'white' : '#cccce2'};
    background: ${(props: { isActive: boolean }) => props.isActive ? '#243fb4' : 'transparent'};
    &:hover {
        background: ${(props: { isActive: boolean }) => props.isActive ? '#3751c6' : '#353849'}
    }
`;

interface Props {
    date: string;
    isActive: boolean;
    isAnotherMonth: boolean;
}

export const CalendarDay: FC<Props> = memo(({ date, isActive, isAnotherMonth }) => {
    const dayNumber = date.split('-')[1];

    return (
        <CalendarDayStyled>
            <CalendarDayButtonStyled isAnotherMonth={isAnotherMonth}>
                <CalendarDayNumberStyled isActive={isActive}>
                    {dayNumber}
                </CalendarDayNumberStyled>
            </CalendarDayButtonStyled>
        </CalendarDayStyled>
    );
});
