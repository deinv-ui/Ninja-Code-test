import styled from 'styled-components'
// import {Link as LinkR } from 'react-router-dom'
// import {Link as LinkS } from 'react-scroll'
import backgroundImage from '../../img/card1.png';
import secondBackgroundImage from '../../img/python1.jpg';
import thirdBackgroundImage from '../../img/java.jpg';

export const Cardsec = styled.div`


`
export const Cardh1 = styled.div`


`

export const Card = styled.div`
    margin-top: 100px;

`

export const Imgwrap = styled.div`
    background-image: url(${backgroundImage});
    width: 60%;
    background-size: cover;
    height: 360px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 40px;
    cursor: pointer;
    padding: 50px;
    border-radius: 45px;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        opacity: 0.8;
        // filter: brightness(0.9);
    }
`

export const SecondImgwrap = styled.div`
    background-image: url(${secondBackgroundImage});
    width: 60%;
    background-size: cover;
    height: 360px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
    padding: 50px;
    border-radius: 45px;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        opacity: 0.8;
        // filter: brightness(0.9);
    }
`


export const ThirdImgwrap = styled.div`
    background-image: url(${thirdBackgroundImage});
    width: 60%;
    background-size: cover;
    height: 360px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
    padding: 50px;
    border-radius: 45px;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        opacity: 0.8;
        // filter: brightness(0.9);
    }
`