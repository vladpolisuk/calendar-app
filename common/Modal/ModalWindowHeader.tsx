import React, { FC } from 'react';
import styled from 'styled-components';
import { ModalCloseButton } from './ModalCloseButton';

const ModalWindowHeaderStyled = styled.div`
    display: flex;
    margin-bottom: 10px;
    @media (max-width: 500px) {
        margin-bottom: 20px;
    }
`;

const HeaderWrapperStyled = styled.div`
    display: flex;
    @media (max-width: 500px) {
        flex-direction: column;
        width: 100%
    }
`;

interface Props {
    onClose: () => void;
}

export const ModalWindowHeader: FC<Props> = ({ children, onClose }) => {
    return (
        <ModalWindowHeaderStyled>
            <HeaderWrapperStyled>
                {children}
            </HeaderWrapperStyled>
            <ModalCloseButton onClick={onClose} />
        </ModalWindowHeaderStyled>
    )
};
