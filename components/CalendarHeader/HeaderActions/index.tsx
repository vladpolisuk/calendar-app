import React from 'react';
import styled from 'styled-components';
import { HeaderAction } from './HeaderAction';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const HeaderActionsStyled = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderActions = () => {
    return (
        <HeaderActionsStyled>
            <HeaderAction text='Prev Month' icon={<FaCaretLeft />} iconPosition="left" />
            <HeaderAction text='Next Month' icon={<FaCaretRight />} iconPosition="right" />
            <HeaderAction icon={<FiSettings />} iconPosition='center' />
        </HeaderActionsStyled>
    )
};
