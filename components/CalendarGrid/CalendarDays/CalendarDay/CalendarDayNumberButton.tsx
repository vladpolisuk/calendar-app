import React, { FC } from 'react';
import styled from 'styled-components';
import { useOpenDayView } from '../../../../hooks/ui/useOpenDayView';

const CalendarDayNumberButtonStyled = styled.button`
    height: 27px;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50%;
    width: 27px;
    font-weight: 700;
    letter-spacing: 0.4px;
    display: flex;
    align-items: center;
    font-size: 13px;
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
}

export const CalendarDayNumberButton: FC<Props> = ({ date, isActive }) => {
    const openDayView = useOpenDayView(date);
    const dayNumber = date.split('-')[1];

    return (
        <CalendarDayNumberButtonStyled
            aria-label={`Go to ${date} detail`}
            onClick={openDayView}
            isActive={isActive}>
            {dayNumber}
        </CalendarDayNumberButtonStyled>
    )
};
