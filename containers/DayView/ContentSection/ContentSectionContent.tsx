import React, { FC } from 'react';
import styled from 'styled-components';

const ContentSectionContentStyled = styled.div`
    width: 100%;
`;

export const ContentSectionContent: FC = ({ children }) => {
    return (
        <ContentSectionContentStyled>
            {children}
        </ContentSectionContentStyled>
    )
};
