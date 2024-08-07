import styled from 'styled-components'
import {Link as LinkR } from 'react-router-dom'
// import {Link as LinkS } from 'react-scroll'


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
    // margin-top: -80px;

    @media screen and (max-width: 960px){
    transition: 0.7s all ease;
}
`;
export const NavbarContainer = styled.div`

    display: flex;
    justify-content: space-between;
    z-index: 1;
    height: 80px;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
`;
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 15px;
    font=weight: bold;
    text-decoration: none;
`;



export const MobileIcon = styled.div`
    //FOR MOBILE ICON no display on normal desktop view
    display: none;
    
    //  When the screen is smaller, display the set up menu
    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
export const NavMenu = styled.ul`
    // to display the list items in a row
    display: flex;

    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -25px;

    // When screen get smaller like for phone or pad, hide the menu bar
    @media screen and (max-width:768px){
        display: none;
    }
`;
export const NavItems = styled.li`
    height: 80px;
    margin-top: 20px;
`;
export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decorations: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #B533FF;
    }
`;

export const NavRegister = styled(LinkR)`
    font-size: 15px;
    background: #F4D03F;
    color: #010606;
    display: flex;
    align-items: center;
    text-decorations: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    margin-left: 200px;
    &.active{
        border-bottom: 3px solid #B533FF;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #C766FF;;
        color: #fff;
    }
    @media screen and (max-width:768px){
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #C766FF;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #F4D03F;
        color: #010606;
    }

`;
