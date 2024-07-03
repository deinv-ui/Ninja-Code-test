import styled from 'styled-components';
import backgroundImage from '../../img/profile_img1.png';
import backgroundImage2 from '../../img/profile_img2.jpg';
import backgroundImage3 from '../../img/profile_img3.png';

export const Imag = styled.div`

  background-image: url(${backgroundImage});
  background-position: center; 
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  margin-left: 25%;
  cursor: pointer;
`;

export const Imag2 = styled.div`

  background-image: url(${backgroundImage2});
  background-position: center; 
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  margin-left: 25%;
  cursor: pointer;
`;

export const Imag3 = styled.div`

  background-image: url(${backgroundImage3});
  background-position: center; 
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  margin-left: 25%;
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
