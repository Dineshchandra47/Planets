import styled from 'styled-components';

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
