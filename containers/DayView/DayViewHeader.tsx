import moment from 'moment';
import React from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import styled from 'styled-components';
import { BackButton } from '../../common/BackButton';
import { useAppSelector } from '../../hooks/store';
import { getDayDate } from '../../redux/reducer-day/selectors';

const DayViewHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
`;

const BackButtonStyled = styled.button`
    background: transparent;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    color: #bbbbc0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    &:hover { color: white }
`;

export const DayViewHeader = () => {
    const date = useAppSelector(getDayDate);

    const day = date.split('-')[1];
    const month = moment.months()[+date.split('-')[0] - 1];
    const year = date.split('-')[2];

    return (
        <DayViewHeaderStyled>
            <BackButton Styled={BackButtonStyled}>
                <HiOutlineArrowLeft size="25px" />
            </BackButton>
            <h2>{day} {month} {year}</h2>
        </DayViewHeaderStyled>
    )
};
