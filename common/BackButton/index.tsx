import { useRouter } from 'next/router';
import React, { FC, HTMLAttributes } from 'react';
import { StyledComponent } from 'styled-components';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    Styled?: StyledComponent<"button", any, {}, never>;
}

export const BackButton: FC<Props> = ({ children, Styled, ...props }) => {
    const router = useRouter();
    const goBack = () => router.back();

    return Styled ? (
        <Styled onClick={goBack} {...props}>
            {children}
        </Styled>
    ) : (
        <button onClick={goBack} {...props}>
            {children}
        </button>
    )
};
