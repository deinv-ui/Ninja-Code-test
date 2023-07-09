import React from 'react'
import {Container, FormWrapper, Icon, FormContent, Form, FormH1, 
    FormLbl, FormInput, FormBtn, Text} from './RegisterElements';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Register = () => {
  return (
    <>
    <Container>
      <FormWrapper>
          <Icon to='/'>NINJA CODE</Icon>
          <FormContent>
              <Form action='#'>
                  <FormH1>Create a new account</FormH1>
                  <FormLbl htmlFor='for'>Email</FormLbl>
                  <FormInput type='email' required></FormInput>
                  <FormLbl htmlFor='for'>Username</FormLbl>
                  <FormInput type='username' required></FormInput>
                  <FormLbl htmlFor='for'>Password</FormLbl>
                  <FormInput type='password'></FormInput>
                  <FormLbl htmlFor='for'>Re-enter Password</FormLbl>
                  <FormInput type='password'></FormInput>

                  
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
