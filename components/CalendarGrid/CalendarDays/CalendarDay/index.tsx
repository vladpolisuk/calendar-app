/* eslint-disable react/display-name */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { Event } from '../../../../redux/reducer-calendar/types';
import { CalendarDayContent } from '../CalendarDayContent';
import { ShowMoreButton } from '../CalendarDayContent/ShowMoreButton';
import { CalendarDayNumberButton } from './CalendarDayNumberButton';

const CalendarDayStyled = styled.li`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
`;

const CalendarDayButtonStyled = styled.button`
    width: 100%;
    height: 100%;
    padding: 36px 5px 5px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: auto;
    background: ${(props: { isAnotherMonth: boolean }) => props.isAnotherMonth ? '#1b1d24' : '#24262d'};
    &:hover { background: ${(props: { isAnotherMonth: boolean }) => props.isAnotherMonth ? '#1e2027' : '#282b33'} }
`;

interface Props {
    date: string;
    isActive: boolean;
    isAnotherMonth: boolean;
    events: Event[];
    tasks: Event[];
    reminders: Event[];
    openNewEventModal: (date: string) => void;
}

export const CalendarDay: FC<Props> = memo(({
    date,
    tasks,
    events,
    isActive,
    reminders,
    isAnotherMonth,
    openNewEventModal,
}) => {
    const components = [...events, ...tasks, ...reminders]
    const moreEventsCount = components.length - 4;

    return (
        <CalendarDayStyled>
            <CalendarDayButtonStyled
                onClick={() => openNewEventModal(date)}
                isAnotherMonth={isAnotherMonth}>
                <CalendarDayContent
                    dayDate={date}
                    tasks={tasks}
                    events={events}
                    reminders={reminders} />
            </CalendarDayButtonStyled>
            {moreEventsCount > 0
                ? <ShowMoreButton
                    dayDate={date}
                    moreEventsCount={moreEventsCount} />
                : ''}
            <CalendarDayNumberButton
                date={date}
                isActive={isActive} />
        </CalendarDayStyled>
    );
});
