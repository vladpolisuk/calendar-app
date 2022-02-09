import React, { FC, memo, useMemo } from 'react';
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
    @media (max-width: 800px) {
        padding: 36px 0px 0px;
    }
    @media (max-width: 600px) {
       align-items: center;
       padding: 45px 0 0;
    }
`;

interface Props {
    date: string;
    isActive: boolean;
    isAnotherMonth: boolean;
    events: Event[];
    tasks: Event[];
    reminders: Event[];
    openNewEventModal: (date: string) => void;
    openEventEditor: (event: Event) => void;
}

export const CalendarDay: FC<Props> = memo(({
    date,
    tasks,
    events,
    isActive,
    reminders,
    isAnotherMonth,
    openNewEventModal,
    openEventEditor,
}) => {

    const moreEventsCount = tasks.length + reminders.length + events.length - 4;

    const showMoreButton = moreEventsCount > 0
        ? <ShowMoreButton dayDate={date} moreEventsCount={moreEventsCount} />
        : null

    return (
        <CalendarDayStyled>
            <CalendarDayButtonStyled
                onClick={() => openNewEventModal(date)}
                isAnotherMonth={isAnotherMonth}>
                <CalendarDayContent
                    dayDate={date}
                    tasks={tasks}
                    events={events}
                    reminders={reminders}
                    openEventEditor={openEventEditor} />
            </CalendarDayButtonStyled>
            {showMoreButton}
            <CalendarDayNumberButton
                date={date}
                isActive={isActive} />
        </CalendarDayStyled>
    );
});
