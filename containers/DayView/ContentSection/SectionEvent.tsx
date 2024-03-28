import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const SectionEventStyled = styled.div`
    box-shadow: 0 0 2px 0 #11121363;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    background: ${({ color }) => color};
    color: ${({ color }) => color === 'white' ? 'black' : 'white'};
`;

interface Props extends PropsWithChildren {
    color: string;
}

export const SectionEvent: FC<Props> = ({ children, color }) => {
    return (
        <SectionEventStyled color={color}>
            {children}
        </SectionEventStyled>
    )
};
