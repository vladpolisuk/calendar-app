import React, { FC } from 'react';
import styled from 'styled-components';
import { ContentSectionContent } from './ContentSectionContent';

const ContentSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

const ContentSectionHeader = styled.div`
    padding: 8px 20px;
    width: 100%;
    background: #2d303d;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: 10px;
`;

const ContentSectionHeading = styled.p`
    font-size: 18px;
`;

interface Props {
    name: 'Events' | 'Tasks' | 'Reminders';
}

export const ContentSection: FC<Props> = ({ name, children }) => {
    return (
        <ContentSectionStyled>
            <ContentSectionHeader>
                <ContentSectionHeading>
                    {name}
                </ContentSectionHeading>
            </ContentSectionHeader>
            <ContentSectionContent>
                {children}
            </ContentSectionContent>
        </ContentSectionStyled>
    )
};
