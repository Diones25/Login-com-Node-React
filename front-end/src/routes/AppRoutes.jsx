import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} 
from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { AuthProvider } from '../contexts/auth';
import Private from './Private';

const AppRoutes = () => {    

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/' element={<Private> <HomePage/> </Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes;