import React, { useState } from 'react';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
  return (
    <HeroContainer>
        <HeroBg>

        </HeroBg>
        <HeroContent>
            <HeroH1>
            LEARN, CREATE, AND CONQUER CODING!
            </HeroH1>
               
                <HeroBtnWrapper>
                    <Button to='/login' 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    >
                        Join now {hover ? <ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
