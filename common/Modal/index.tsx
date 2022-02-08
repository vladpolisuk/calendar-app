import React, { FC, memo } from 'react';
import { createPortal } from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import { ModalOverlay } from './ModalOverlay';

interface Props {
    isOpen: boolean;
}

export const Modal: FC<Props> = memo(({ children, isOpen }) => {
    return isOpen ? createPortal(
        <ReactFocusLock>
            <ModalOverlay>
                {children}
            </ModalOverlay>
        </ReactFocusLock>,
        document.querySelector('body') as Element
    ) : null
});
