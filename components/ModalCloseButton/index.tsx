import React, { FC, memo } from 'react';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

const ModalCloseButtonStyled = styled.button`
    background: transparent;
    border: 2px solid gray;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 3px;
    &:hover {
        color: white;
	    border-color: white;
    }
`;

interface Props {
    onClick: () => void;
}

export const ModalCloseButton: FC<Props> = memo(({ onClick }) => {
    return (
        <ModalCloseButtonStyled
            aria-label="Close window"
            onClick={onClick}>
            <IoMdClose size="20px" />
        </ModalCloseButtonStyled>
    )
});
