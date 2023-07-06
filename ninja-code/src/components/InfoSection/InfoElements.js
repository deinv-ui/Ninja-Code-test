import styled from 'styled-components';
import svgImg from '../../img/img_personal.jpg';
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'


export const InfoContainer = styled.div`
  color: #fff;
  // background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 80px;
  margin-top: 400px;
 
  @media screen and (max-width: 768px){
    margin-right: 20px;
  }
`;
export const InfoWrapper = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // margin: 0.5rem;
  // z-index: 1;
  // height: 860px;
  // width: 100%;
  // max-width: 1100px;
  // margin-right: auto;
  // margin-left: auto;
  // padding: 0 24px;
  // justify-content: center;
  

  display: flex;
  justify-content: space-between;
  z-index: 1;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  margin-top: 500px;
  
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, auto);
  align-items: center;
  
  @media screen and (max-width: 768px){
  }
`;

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-right: 20px;

  
  
`;

export const TopLine = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;

  @media screen and (max-width: 480px){
    font-size: 26px;
  }
`;
export const Subtitle = styled.p`
  color: #000;
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  
  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`;


export const ImgWrap = styled.div`
  background-image: url(${svgImg});
  width: 100%;
  background-size: cover;
  height: 360px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: -40px;
  cursor: pointer;
  padding: 100px;

  @media and (max-width: 768px){
    height: 300px;
  }
`;
export const Img = styled.img`

  // margin: 0 0 10px 0;
  // padding-right: 0;
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

   
   
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