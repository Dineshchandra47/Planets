import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
    height: 100%;
`;

export const List = styled.ul`
    display: flex;
    flex-flow: row;
    gap: 32px;
    width: 100%;
    margin-top: 39px;

    @media (min-width: 1025px) {
        margin-top: 0;
        height: 100%;
    }
`;

export const Link = styled(NavLink)`
    display: flex;
    position: relative;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.whiteAlpha75};
    cursor: pointer;
    transition: color 300ms ease;

`
