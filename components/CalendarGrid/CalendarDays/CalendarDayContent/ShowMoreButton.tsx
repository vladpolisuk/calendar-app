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
    &:hover {
        color: #ffffff7d;
        border-color: #ffffff7d;
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
            Show more +{moreEventsCount}
        </ShowMoreButtonStyled>
    )
};
