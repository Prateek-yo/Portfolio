import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('coffee-finder-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const userWithDefaults = {
      ...userData,
      bio: userData.bio || 'Coffee enthusiast exploring cafes across India!',
      hobby: userData.hobby || 'Coffee tasting',
      joinDate: new Date().toISOString(),
      badges: ['Coffee Explorer'],
      profilePicture: userData.profilePicture || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    };
    setUser(userWithDefaults);
    localStorage.setItem('coffee-finder-user', JSON.stringify(userWithDefaults));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('coffee-finder-user');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('coffee-finder-user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};