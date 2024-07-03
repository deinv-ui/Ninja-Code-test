import React, { useState } from 'react';
import {Container, FormWrapper, Icon, FormContent, Form, FormH1, 
    FormLbl, FormInput, FormBtn, Text} from './RegisterElements';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register  = (props) => {

  let history = useNavigate(); 
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    // Update the state based on the input field's name
    setData({ ...data, [event.target.name]: event.target.value });
    // console.log(data)
  };

  const handleSubmit = (event) => {
    
    event.preventDefault(); 
       const sendData = {
            username:data.username,
            email:data.email,
            password:data.password
  }
    console.log(sendData);

    axios.post('http://localhost/insert.php',sendData)
        .then((result)=>{
            if (result.data.Status === 'Invalid') { 
          alert('Invalid User');  
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           alert('Successful Register! Please login.');
           history(`/login`);
        }
      })  

  
}
    
  

  return (
    <>
    <Container>
      <FormWrapper>
          <Icon to='/'>NINJA CODE</Icon>
          <FormContent>
              <Form onSubmit={handleSubmit}>
                  <FormH1>Create a new account</FormH1>
                  <FormLbl htmlFor='for'>Email</FormLbl>
                  <FormInput type="email" name="email" onChange={handleChange} value={data.email} required></FormInput>
                  
                  <FormLbl htmlFor='for'>Username</FormLbl>
                  <FormInput type="text" name="username" onChange={handleChange} value={data.username} required></FormInput>

                  <FormLbl htmlFor='for'>Password</FormLbl>
                  <FormInput type="password" name="password" onChange={handleChange} value={data.password}></FormInput>
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
export default Register;
