import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import { GiBallGlow } from "react-icons/gi";

export const Container = styled.div`
    display: flex;
`
export const SideBarContainer = styled.aside`
    
    position: fixed;
    
    width: 20%
    height:100%;
    background: #C766FF;
    display: grid;
    align-items: center;
    ovweflow-x: hidden;
    overflow-y: scroll;
    left: 0;
    
    @media screen and (max-width: 480px){
        width: 30%;
       
    
    }
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
        padding: 10px;
      
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

    @media screen and (max-width: 480px){
        font-size: 15px;
      
    }
`

export const BtnWrapper = styled.div`
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
    margin-top: 80px;
  margin-left: 25%;
  padding: 4px 10px;
    display: inline-block;
    padding-bottom: 30px;
    margin-right: 30px;
    @media screen and (max-width: 600px){
       margin-left: 40%;
       font-size:15px;
    }

`
export const Contenttitle = styled.div`
    font-size: 60px;
    font-weight: bold;

`
export const Contenth1 = styled.div`
    margin-top: 30px;
    font-size: 30px;

`
export const Contenth2 = styled.div`
    font-size: 20px;
    margin-top: 30px;
`


export const Contentp = styled.div`


`
export const UnorderedList = styled.ul`
    margin-left: 5%;
`;

export const btnwrap = styled.div`
display: flex;

`;

export const NavBtnLink = styled.button`

    border-radius: 50px;
    background: #F4D03F;
    color: #010606;
    
    white-space: nowrap;
    padding: 10px 22px;
    
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 30px;
    
    margin-left: 2rem;
   
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #C766FF;
        color: #fff;
    }

`;

export const EditorContainer = styled.div`
    margin-top: 20px;
`;

export const DialogBox = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
padding: 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
z-index: 9999;
`;

export const Containerti = styled.div`
display: flex;
align-items: center;
`;

export const Icon = styled(GiBallGlow)`
    font-size: 3rem;
    margin-right: 10px;
    color: #8120D7;
    cursor: pointer;
`;




