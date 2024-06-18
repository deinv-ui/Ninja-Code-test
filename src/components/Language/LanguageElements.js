import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%
    height:100%;
    background: #C766FF;
    display: grid;
    align-items: center;
    overflow-y: scroll;
    left: 0;
    transition: 0.3s ease-in-out;
  
`;


export const SideBarWrapper = styled.div`
    color: #fff;
`

export const SideBarMenu = styled.ul`
    padding: 30px;
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align=items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
    color: #17202A;
    transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrapper = styled.div`
    display: flex;
    justify-content: center;  
    margin-bottom: 100px;
    
`

export const SideBarRoute = styled(LinkR)`
    border-radius: 30px;
    background: #fff;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010616;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #F4D03F;
        color: #010616;

    }
`
export const Content = styled.div`


`

export const Contenth1 = styled.div`
    font-size: 45px;

`

export const Contentp = styled.div`
    font-size: 20px;

`