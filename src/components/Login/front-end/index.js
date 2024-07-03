import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {Container, FormWrapper, Icon, FormContent, Form, FormH1, 
    FormLbl, FormInput, FormBtn, Text} from './LoginElements';
const Login = () => {

  let navigate = useNavigate(); // Use for Navigate on Previous
  const [user, setUser]=useState({
      email:"",
      password:""
  })

  const handleChange = (event) => {
    // Update the state based on the input field's name
    setUser({ ...user, [event.target.name]: event.target.value });
    // console.log(data)
  };

  const handleSubmit = (event) => {
    
    event.preventDefault(); 
       const sendData = {
            
            email: user.email,
            password:user.password
  }
    console.log(sendData);

    axios.post('http://localhost/login.php',sendData)
        .then((result) => {
            if (result.data.Status === '200') { 
              window.localStorage.setItem('email', result.data.email);
              window.localStorage.setItem('username', (' '+ result.data.username ));  
              navigate(`/profile`);
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           alert('Invalid User');
        }
      })  
      .catch((error) => {
        // Handle API call errors
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
}

  return (
    <>
      <Container>
        <FormWrapper>
            <Icon to='/'>NINJA CODE</Icon>
            <FormContent>
                <Form onSubmit={handleSubmit}>
                    <FormH1>Log in to your account now!</FormH1>

                    <FormLbl htmlFor='for'>Email</FormLbl>
                    <FormInput onChange={handleChange} name="email" value={user.email} type="email" required></FormInput>

                    <FormLbl htmlFor='for'>Password</FormLbl>
                    <FormInput onChange={handleChange} name="password" value={user.password} type="password"></FormInput>

                    <FormBtn type='submit'>Continue</FormBtn>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrapper>
      </Container>
    </>
  )
}

export default Login;
