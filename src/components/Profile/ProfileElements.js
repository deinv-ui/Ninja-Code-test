import styled from 'styled-components';
import backgroundImage from '../../img/profile_img1.png';
import backgroundImage2 from '../../img/dragon.jpg';
import backgroundImage3 from '../../img/kitsune.jpg';
import backgroundImage4 from '../../img/reddemon.jpg';
import backgroundImage5 from '../../img/bull.jpg';


export const Imag = styled.div`

  background-image: url(${backgroundImage});
  background-position: left; 
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
    margin-top: 10px;
  cursor: pointer;
`;

export const Imag2 = styled.div`

  background-image: url(${backgroundImage2});
  background-position: center; 
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
  
  cursor: pointer;
`;

export const Imag3 = styled.div`

  background-image: url(${backgroundImage3});
  background-position: center; 
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
 
  cursor: pointer;
`;

export const Imag4 = styled.div`

  background-image: url(${backgroundImage4});
  background-position: center; 
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
 
  cursor: pointer;
`;

export const Imag5 = styled.div`

  background-image: url(${backgroundImage5});
  background-position: center; 
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
 
  cursor: pointer;
`;


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
  text-align: center;

  @media screen and (max-width: 480px){
    font-size: 26px;
  }
`;

export const Container = styled.div`
  margin: 30px;
  background: #8120D7;
  height: 350px;
  border-radius: 20px;
  @media screen and (max-width: 480px){
    font-size: 26px;
  }
`;

