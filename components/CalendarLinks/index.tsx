import React from 'react';
import styled from 'styled-components';
import { ImTelegram } from 'react-icons/im';
import { FaFacebook, FaGithub, FaVk } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

const CalendarLinksStyled = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const CalendarLinkStyled = styled.li`
    margin-right: 10px;
`;

const LinkStyled = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: #ffffff82;
    transition: 10ms;
    &:hover {color: white}
    &:active {color: white}
    @media (max-width: 500px) {
        padding: 5px;
    }
    @media (max-width: 421px) {
        width: 30px;
    }
`;

const links = [
    { href: 'https://github.com/vladpolisuk/calendar-app', name: 'Project GitHub', icon: <FaGithub size="25px" /> },
    { href: 'https://github.com/vladpolisuk', name: 'GitHub', icon: <FiGithub size="25px" /> },
    { href: 'https://t.me/vladpolisuk', name: 'Telegram', icon: <ImTelegram size="25px" /> },
    { href: 'mailto:vlad@polisuk.ru', name: 'vlad@polisuk.ru', icon: <SiGmail size="25px" /> },
]

export const CalendarLinks = () => {
    const components = links.map(({ href, name, icon }) => {
        return (
            <CalendarLinkStyled key={name}>
                <LinkStyled
                    href={href}
                    target='_blank'
                    rel="noreferrer"
                    aria-label={`Go to my ${name}`}>
                    {icon}
                </LinkStyled>
            </CalendarLinkStyled>
        )
    })

    return (
        <CalendarLinksStyled>
            {components}
        </CalendarLinksStyled>
    )
};
