import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Imag, Imag2, Imag3, Heading} from './ReviewElements';

const Review = () => {
  return (
    <Container style={{ marginTop: '600px' }}> {/* Add marginTop style here */}
    <Heading>Customer Review</Heading>
     <CardGroup>
      <Card style={{ margin: '20px' }}>
      <Imag />
        <Card.Body>
          <Card.Title style={{ marginLeft: '25%', padding: '10px', fontWeight: 'bold' }}>John Doe</Card.Title>
          <Card.Text>
          "Ninja Code has been an incredible learning platform for me! The courses are well-structured, and the content is top-notch. 
          <br /><br />The instructors are knowledgeable and make complex topics easy to understand. 
         
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card style={{ margin: '20px' }}>
      <Imag2 />
        <Card.Body>
          <Card.Title style={{ marginLeft: '20%', padding: '10px', fontWeight: 'bold' }}> Jane Smith</Card.Title>
          <Card.Text>
          "I've tried several coding platforms, but Ninja Code stands out from the rest. 
          <br /><br />The interactive learning environment, practical exercises, and real-world projects 
          have boosted my confidence as a developer. 
          
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{ margin: '20px' }}>
      <Imag3 />
        <Card.Body>
          <Card.Title style={{ marginLeft: '15%', padding: '10px', fontWeight: 'bold' }}>Sarah Williams</Card.Title>
          <Card.Text>
          "Ninja Code has exceeded my expectations! The platform's flexibility allowed me to learn at my own pace, 
          <br />making it convenient to balance learning with my job. 
          
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    </Container>
  );
};

export default Review;
