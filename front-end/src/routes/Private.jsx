import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if(loading ) {
    return <div className='loading'>Carregando...</div>
  }

  if(!authenticated) {
    return <Navigate to="/login" />
  }

  return children;
}

export default Private