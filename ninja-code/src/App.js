
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import CoursePage from './pages/course';
import PythonPage from './pages/python';

function App() {
  return (
    <Router>
     <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/login' element={<LoginPage/>} exact/>
        <Route path='/register' element={<RegisterPage/>} exact/>
        <Route path='/course' element={<CoursePage/>} exact/>
        <Route path='/python' element={<PythonPage/>} exact/>
     </Routes>
    
    </Router>
  );
}

export default App;
