import React, { FC } from 'react';
import styled from 'styled-components';
import { useOpenDayView } from '../../../../hooks/ui/useOpenDayView';

const ShowMoreButtonStyled = styled.button`
    width: 100%;
    background: transparent;
    color: #ffffff3d;
    border: 1px solid #ffffff3b;
    border-radius: 3px;
    font-size: 13px;
    position: absolute;
    bottom: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: #ffffff7d;
        border-color: #ffffff7d;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

const ShowMoreTextStyled = styled.p`
    display: inline;
    margin-right: 5px;
    @media (max-width: 768px) {
        display: none;
    }
`;

interface Props {
    dayDate: string;
    moreEventsCount: number;
}

export const ShowMoreButton: FC<Props> = ({ dayDate, moreEventsCount }) => {
    const openDayView = useOpenDayView(dayDate);

    return (
        <ShowMoreButtonStyled onClick={openDayView}>
            <ShowMoreTextStyled>
                Show more
            </ShowMoreTextStyled>
            +{moreEventsCount}
        </ShowMoreButtonStyled>
    )
};
