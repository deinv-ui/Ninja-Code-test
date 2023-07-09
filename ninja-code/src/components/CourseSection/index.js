import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Cardsec, Cardh1, Card, Imgwrap,SecondImgwrap,ThirdImgwrap } from './CourseElements';

const Course = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
  return (
    <>
    <Cardsec>
        <Cardh1>Courses</Cardh1>
        <Carousel responsive={responsive}>
            <Card>
            <Imgwrap ></Imgwrap>
            </Card>
            <Card>
            <SecondImgwrap></SecondImgwrap>
            </Card>
            <Card>
            <ThirdImgwrap></ThirdImgwrap>
            </Card>
            
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            
        
        </Carousel>  
    </Cardsec>
    </>
  )
}

export default Course
