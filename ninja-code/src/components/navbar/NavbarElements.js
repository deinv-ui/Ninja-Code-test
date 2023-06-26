import styled from 'styled-components'
import {Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    height: 80px;
    margin-top: -80px;

    @media screen and (max-width: 960px){
    transition: 0.7s all ease;
}
`
export const NavbarContainer = styled.div`

    display: flex;
    justify-content: space-between;
    z-index: 1;
    height: 80px;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font=weight: bold;
    text-decoration: none;
`
