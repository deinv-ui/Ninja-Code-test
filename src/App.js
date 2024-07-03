import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import CoursePage from './pages/course';
import PythonPage from './pages/python';
import ProfilePage from './pages/profile';
import ReviewPage from './pages/review';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/python' element={<PythonPage />} />
        <Route path='/review' element={<ReviewPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
