import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const SectionEventContentStyled = styled.div`
    padding: 5px;
    font-size: 14px;
`;

export const SectionEventContent: FC<PropsWithChildren> = ({ children }) => {
    return children ? (
        <SectionEventContentStyled>
            {children}
        </SectionEventContentStyled>
    ) : null
};
