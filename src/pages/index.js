import React, {useState} from 'react';
import Navbar from '../components/navbar';
import SideBar from '../components/sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import FooterSection from '../components/Footer';
import ReviewSection from '../components/ReviewSection';


const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection/>
    <ReviewSection/>
    <FooterSection/>
    </>
  )
}

export default Home;
