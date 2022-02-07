import React, { FC, memo, MouseEventHandler } from 'react';
import { MdBookmark, MdEventAvailable, MdOutlineTaskAlt } from 'react-icons/md';
import styled from 'styled-components';
import { Event } from '../../../../redux/reducer-calendar/types';

const CalendarEventStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 2px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    z-index: 2;
    color: ${(props: { bgColor: string }) => props.bgColor === 'white' ? '#212639' : 'white'} ;
    text-shadow: ${(props: { bgColor: string }) => props.bgColor === 'white' ? '-1px 1px 4px #0000002b' : '-1px 1px 4px #0000008c'} ; 
    background-color: ${(props: { bgColor: string }) => props.bgColor}
`;

const EventTitleStyled = styled.p`
    margin-left: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: fit-content;
`;

interface Props extends Event {
    openEventEditor: (event: Event) => void;
}

const icons = {
    'event': <MdEventAvailable size="13px" style={{ minWidth: '13px' }} />,
    'task': <MdOutlineTaskAlt size="13px" style={{ minWidth: '13px' }} />,
    'reminder': <MdBookmark size="13px" style={{ minWidth: '13px' }} />,
}

export const CalendarEvent: FC<Props> = memo(({ openEventEditor, ...event }) => {
    const openEventEditorHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        openEventEditor(event)
    }

    return (
        <CalendarEventStyled
            onClick={openEventEditorHandler}
            bgColor={event.eventColor}>
            {icons[event.eventType]}
            <EventTitleStyled>
                {event.eventTitle}
            </EventTitleStyled>
        </CalendarEventStyled>
    )
})
