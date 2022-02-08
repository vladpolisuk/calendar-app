import React, { FC } from 'react';
import styled from 'styled-components';
import { ModalCloseButton } from './ModalCloseButton';

const ModalWindowHeaderStyled = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

interface Props {
    onClose: () => void;
}

export const ModalWindowHeader: FC<Props> = ({ children, onClose }) => {
    return (
        <ModalWindowHeaderStyled>
            {children}
            <ModalCloseButton onClick={onClose} />
        </ModalWindowHeaderStyled>
    )
};
