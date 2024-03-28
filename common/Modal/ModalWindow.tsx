import { FC, PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';

const EventEditorAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale(1.1);
    } to {
        opacity: 1;
        transform: scale(1);
    }
`;

const EventEditorStyled = styled.div`
    max-width: 500px;
    width: 100%;
    background-color: #2d2f3a;
    border-radius: 10px;
    animation: ${EventEditorAnimation} 50ms linear both;
    padding: 20px;
`;

export const ModalWindow: FC<PropsWithChildren> = ({ children }) => {
    return (
        <EventEditorStyled>
            {children}
        </EventEditorStyled>
    )
};
