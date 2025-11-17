import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Home from './pages/Home';
import MoodFinder from './pages/MoodFinder';
import EventsOffers from './pages/EventsOffers';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // If user is not authenticated, show landing and login pages only
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    );
  }

  // If user is authenticated, show main app with navbar
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mood-finder" element={<MoodFinder />} />
          <Route path="/events-offers" element={<EventsOffers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FavoritesProvider>
          <div className="app">
            <AppRoutes />
          </div>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;