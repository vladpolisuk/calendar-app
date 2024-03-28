import { useRouter } from 'next/router';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    Styled?: any;
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
