import React, { FC, memo, MouseEventHandler } from 'react';
import styled from 'styled-components';

const HeaderActionStyled = styled.li`
    margin-right: 10px;
    &:last-child { margin-right: 0 };
    height: 34px;
    @media (max-width: 768px) {
        height: 32px;
    }
    @media (max-width: 500px) {
        height: 30px;
    }
`;

const ActionButtonStyled = styled.button`
    display: flex;
    align-items: center;
    border: 2px solid #bbbbc0;
    background: transparent;
    color: #bbbbc0;
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
    font-weight: 700;
    height: 100%;
    &:hover { color: white; border-color: white; };
    &:active { transform: scale(.95) };
    @media (max-width: 768px) {
        padding: 5px;
    }
    @media (max-width: 500px) {
        padding: 0 8px;
    }
    @media (max-width: 421px) {
       padding: 0 6px;
       font-size: 13px;
    }
`;

const ActionTextStyled = styled.p`
    margin: 0 5px;
    @media (max-width: 650px) {
        display: none;
    }
`;

interface Props {
    text?: string;
    icon?: JSX.Element;
    position?: 'left' | 'right' | 'center';
    action?: MouseEventHandler<HTMLLIElement>;
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

    'center': (icon: JSX.Element | undefined, text: string) => icon || text
}

export const HeaderAction: FC<Props> = memo(({ text = '', icon, position = 'left', action }) => {
    return (
        <HeaderActionStyled onClick={action}>
            <ActionButtonStyled aria-label={`${text}`}>
                {buttonsDirections[position](icon, text)}
            </ActionButtonStyled>
        </HeaderActionStyled>
    )
})
