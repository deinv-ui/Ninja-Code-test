import React from 'react'
import { SideBarContainer, 
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    Contenth1,
    Contentp } from '../LanguageElements';
import Navbar from '../../navbar';

const Python = () => {
  return (
   <>
   <Navbar />
   <SideBarContainer>
           
            <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink>
                Python Home
                </SideBarLink>
                <SideBarLink>
                Python Intro
                </SideBarLink>
                <SideBarLink>
                Python Get Started
                </SideBarLink>
                <SideBarLink>
                Python Syntax
                </SideBarLink>
                <SideBarLink>
                Python Comment
                </SideBarLink>
                <SideBarLink>
                Python Variable
                </SideBarLink>
                <SideBarLink>
                Python Data Type
                </SideBarLink>
                <SideBarLink>
                Python Variable
                </SideBarLink>
                <SideBarLink>
                Python Data Type
                </SideBarLink>
            </SideBarMenu>
           
        </SideBarWrapper>  
        </SideBarContainer>
        <Content>
          <Contenth1>Python Home</Contenth1>
          <Contentp>Python Intro</Contentp>
        </Content>
   
   
   
   </>

  
  );
 
 
   
   
}

export default Python;
