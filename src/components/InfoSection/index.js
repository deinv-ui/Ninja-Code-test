import React from 'react';

import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  NavBtn,
  NavBtnLink
  
} from './InfoElements';

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          
              <TextWrapper>
                <TopLine>Customized roadmap that aligns with needs</TopLine>
                <Heading>Personalized Learning</Heading>
                
                <Subtitle >Tailored pathways based on your unique skills and interests, ensuring a perfect alignment with your goals.</Subtitle>
                
                <NavBtn>
                <NavBtnLink to="/register">Get Started!</NavBtnLink>
                </NavBtn>
                </TextWrapper>

                <ImgWrap/>
                
              
           
        </InfoWrapper>
      </InfoContainer>
    
    
    
    </>
  )
}

export default InfoSection;
