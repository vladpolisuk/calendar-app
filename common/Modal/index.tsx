import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import { ModalOverlay } from './ModalOverlay';

interface Props extends PropsWithChildren {
    isOpen: boolean;
}

export const Modal: FC<Props> = ({ children, isOpen }): React.ReactPortal | null => {
    const modalContent: ReactNode | null = isOpen ? (
        <ReactFocusLock>
            <ModalOverlay>
                {children}
            </ModalOverlay>
        </ReactFocusLock>
    ) : null;

    // @ts-ignore
    return modalContent ? createPortal(modalContent, document.body) : null;
};
