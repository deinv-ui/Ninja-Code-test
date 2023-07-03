import React from 'react';
import { Button } from 'react-scroll';

const InfoSection = () => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Col1>
              <TextWrapper>
                <TopLine></TopLine>
                <Heading></Heading>
                <Subtitle></Subtitle>
                <BtnWrap>
                  <Button to='home'>Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Col1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    
    
    
    </>
  )
}

export default InfoSection;
