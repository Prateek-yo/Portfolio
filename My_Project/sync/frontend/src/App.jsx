import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';

const App = () => {

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />
      <Route path="/profile" element={<ProfileUpdate />} />
    </Routes>
  );
};

export default App;
