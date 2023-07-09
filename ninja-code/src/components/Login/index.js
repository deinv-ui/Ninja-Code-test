import React from 'react'
import {Container, FormWrapper, Icon, FormContent, Form, FormH1, 
    FormLbl, FormInput, FormBtn, Text} from './LoginElements';
const Login = () => {
  return (
    <>
      <Container>
        <FormWrapper>
            <Icon to='/'>NINJA CODE</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Log in to your account now!</FormH1>
                    <FormLbl htmlFor='for'>Email</FormLbl>
                    <FormInput type='email' required></FormInput>
                    <FormLbl htmlFor='for'>Password</FormLbl>
                    <FormInput type='password'></FormInput>
                    <FormBtn type='submit'>Continue</FormBtn>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrapper>
      </Container>
    </>
  )
}

export default Login
