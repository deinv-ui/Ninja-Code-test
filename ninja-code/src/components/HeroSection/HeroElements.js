import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import backgroundImage from '../../img/Heroimg4.jpg';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding 0 30px;
    height: 800px;
    position: absolute;
    z-index: 1;


`

export const HeroBg = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover; /* Adjust the image size to cover the container */
    background-position: center; 
    position: absolute;
    margin-top: -150px;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%
    overflow: hidden;
    
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 3200px;
    
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
`
export const HeroH1 = styled.h1`
    color: #000000;
    font-size: 58px;
    align-items: center;
    margin-top: -270px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

// export const HeroP = styled.p`
//     margin-top: 20px;
//     color: #000000;
//     font-size: 20px;
//     text-align: left;
//     max-width: 600px;
//     padding: 20px;
    

//     @media screen and (max-width: 768px){
//         font-size: 24px;
//     }

//     @media screen and (max-width: 480px){
//         font-size: 18px;
//     }
// `
// export const ListItem = styled.li`
//   list-style-type: none;
//   margin-bottom: 10px;
// `;

// export const UnorderedList = styled.ul`
//   padding-left: 20px;
// `;

export const HeroBtnWrapper = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`