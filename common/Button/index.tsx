import React, { AllHTMLAttributes, FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

const CancelButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    background-color: #525667;
    color: white;
    margin-right: 5px;
`;

const SuccessButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    margin-right: 5px;
    background-color: #356e45;
    color: white;
    font-size: 16px;
    &:disabled {
        background-color: #335c3e;
        color: #ffffff91;
        cursor: auto;
    }
`;

const DeleteEventButtonStyled = styled.button`
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    background-color: #973333;
    color: white;   
`;

interface Props extends AllHTMLAttributes<HTMLButtonElement> {
    variant: 'cancel' | 'success' | 'delete';
};

const variants = {
    'cancel': (props: any, children: ReactNode) => (
        <CancelButtonStyled {...props}>
            {children}
        </CancelButtonStyled>
    ),

    'success': (props: any, children: ReactNode) => (
        <SuccessButtonStyled {...props}>
            {children}
        </SuccessButtonStyled>
    ),

    'delete': (props: any, children: ReactNode) => (
        <DeleteEventButtonStyled {...props}>
            {children}
        </DeleteEventButtonStyled>
    ),
}

export const Button: FC<Props> = memo(({ children, variant, ...props }) => {
    return variants[variant](props, children);
});
