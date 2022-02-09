import React, { FC, memo } from 'react';
import styled from 'styled-components';

const ModalOverlayStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #00000085;
    width: 100%;
    height: 100%;
    z-index: 4;
    padding: 20px;
`;

export const ModalOverlay: FC = memo(({ children }) => {
    return (
        <ModalOverlayStyled>
            {children}
        </ModalOverlayStyled>
    )
});
