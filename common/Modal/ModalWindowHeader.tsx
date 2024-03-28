import { FC, PropsWithChildren } from 'react';
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
    width: 100%;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

interface Props extends PropsWithChildren {
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
