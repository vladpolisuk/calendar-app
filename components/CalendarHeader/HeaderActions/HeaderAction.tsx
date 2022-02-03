import React, { FC } from 'react';
import styled from 'styled-components';

const HeaderActionStyled = styled.li`
    margin-right: 10px;
    &:last-child { margin-right: 0 };
    height: 34px;
`;

const ActionButtonStyled = styled.button`
    display: flex;
    align-items: center;
    border: 2px solid #bbbbc0;
    background: transparent;
    color: #bbbbc0;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 700;
    height: 100%;
    &:hover { color: white; border-color: white; };
    &:active { transform: scale(.95) };
`;

const ActionTextStyled = styled.p`margin: 0 5px;`;

interface Props {
    text?: string;
    icon?: JSX.Element;
    iconPosition?: 'left' | 'right' | 'center';
}

const buttonsDirections = {
    'left': (icon: JSX.Element | undefined, text: string) => {
        return <>
            {icon}
            <ActionTextStyled>
                {text}
            </ActionTextStyled>
        </>
    },

    'right': (icon: JSX.Element | undefined, text: string) => {
        return <>
            <ActionTextStyled>
                {text}
            </ActionTextStyled>
            {icon}
        </>
    },

    'center': (icon: JSX.Element | undefined) => icon
}

export const HeaderAction: FC<Props> = ({ text = '', icon, iconPosition = 'left' }) => {
    return (
        <HeaderActionStyled>
            <ActionButtonStyled aria-label={`${text}`}>
                {buttonsDirections[iconPosition](icon, text)}
            </ActionButtonStyled>
        </HeaderActionStyled>
    )
};
