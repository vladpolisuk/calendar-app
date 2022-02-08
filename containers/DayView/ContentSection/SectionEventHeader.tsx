import React, { FC } from 'react';
import { MdBookmark, MdEdit, MdEventAvailable, MdOutlineTaskAlt } from 'react-icons/md';
import styled from 'styled-components';
import { Button } from '../../../common/Button';
import { Event } from '../../../redux/reducer-calendar/types';

const SectionEventHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const EventInfoStyled = styled.div`
    display: flex;
`;

const EventActionsStyled = styled.div`
    display: flex;
`;

const EventHeaderIconStyled = styled.div`
    margin-right: 5px;
    width: 20px;
    height: 20px;
`;

const EventHeaderTitleStyled = styled.div`
    font-size: 16px;
    text-shadow: -1px 1px 4px #0000008c;
`;

const ActionButtonStyled = styled.button`
    background: transparent;
    border: 2px solid ${(props: { color: string }) => props.color === 'white' ? '#16171c' : 'white'};
    color: ${(props: { color: string }) => props.color === 'white' ? '#16171c' : 'white'};
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    &:hover { 
        background: #00000034 
    }
`;

interface Props {
    event: Event;
    openEventEditor: (event: Event) => void;
}

const icons = {
    'event': <MdEventAvailable size="20px" style={{ minWidth: '20px' }} />,
    'task': <MdOutlineTaskAlt size="20px" style={{ minWidth: '20px' }} />,
    'reminder': <MdBookmark size="20px" style={{ minWidth: '20px' }} />,
}

export const SectionEventHeader: FC<Props> = ({ children, event, openEventEditor }) => {
    const openEventEditorHandler = () => {
        openEventEditor(event)
    }

    return (
        <SectionEventHeaderStyled>
            <EventInfoStyled>
                <EventHeaderIconStyled>
                    {icons[event.eventType]}
                </EventHeaderIconStyled>

                <EventHeaderTitleStyled>
                    {children}
                </EventHeaderTitleStyled>
            </EventInfoStyled>
            <EventActionsStyled>
                <Button
                    color={event.eventColor}
                    onClick={openEventEditorHandler}
                    Styled={ActionButtonStyled}
                    variant="custom">
                    <MdEdit />
                </Button>
            </EventActionsStyled>
        </SectionEventHeaderStyled>
    )
};
