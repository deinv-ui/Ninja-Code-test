import React from 'react'
import Card from 'react-bootstrap/Card';
import Navbar  from '../navbar';
import {Container, Imag, Imag2, Imag3, Imag4, Imag5} from './ProfileElements';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardGroup from 'react-bootstrap/CardGroup';


const Profile = () => {
  const now = 30;
  return (
    <>
    <Navbar/>
    
    <Container>
    <CardGroup style={{padding: '50px'}}>
       <Card style={{ color: 'white',width: '25rem', backgroundColor: 'rgb(172, 147, 194)',
       borderRadius: '10px' }}>
      <Card.Body>
      <Imag />
        <Card.Title>Jamesho</Card.Title>
       
        <Card.Text>
        I'm a total sports nut, especially when it comes to football.
        </Card.Text>
        <ProgressBar now={now} label={`${now}%`} />
      </Card.Body>
    </Card>
    <CardGroup style={{padding: '50px'}}></CardGroup>
   
    <Card.Body style={{ color: 'white'}}>
      <Card.Title>Python</Card.Title>
        <Card.Text>
        Course Enrolled
        </Card.Text>
      <Card.Title>65 points</Card.Title>
        <Card.Text>
           Collected
        </Card.Text>

        <Card.Title>Badges Collected: </Card.Title>
        <div style={{ display: 'flex', marginTop: '10px' }}>
                
                <Imag3 />
                <Imag4 />
                <Imag2 />
                <Imag5 />
              </div>
      </Card.Body>
      
      </CardGroup>
    </Container>
    </>
  )
}

export default Profile
