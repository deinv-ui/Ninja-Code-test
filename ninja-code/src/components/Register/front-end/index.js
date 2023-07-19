import React, { useState } from 'react';
import {Container, FormWrapper, Icon, FormContent, Form, FormH1, 
    FormLbl, FormInput, FormBtn, Text} from './RegisterElements';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register (){

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleInput = (event => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  })

  const handleSubmit = (event => {
    event.preventDefault();
    axios.post('http://localhost:8081/register', values)
    .then(res => 
      {
        console.log(res);
        navigate('/login')
    
    })
    .catch(err => console.log(err));
  })

  return (
    <>
    <Container>
      <FormWrapper>
          <Icon to='/'>NINJA CODE</Icon>
          <FormContent>
              <Form onSubmit={handleSubmit}>
                  <FormH1>Create a new account</FormH1>
                  <FormLbl htmlFor='for'>Email</FormLbl>
                  <FormInput onChange={handleInput} type='email' required></FormInput>

                  <FormLbl htmlFor='for'>Username</FormLbl>
                  <FormInput onChange={handleInput} type='username' required></FormInput>

                  <FormLbl htmlFor='for'>Password</FormLbl>
                  <FormInput onChange={handleInput} type='password'></FormInput>
                  {/* <FormLbl htmlFor='for'>Re-enter Password</FormLbl>
                  <FormInput onChange={handleInput} type='password'></FormInput> */}

                  
                  <Text><FormControlLabel control = {<Checkbox defaultChecked/>} label = "I agree to all terms and condition" />
                  </Text>
                  <FormBtn type='submit'>Register</FormBtn>
                  
              </Form>
          </FormContent>
      </FormWrapper>
    </Container>
  </>

  )
}

export default Register
