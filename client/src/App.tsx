import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import Discover from './components/Discover';
import Profile from './components/Profile';
import Matches from './components/Matches';
import Chat from './components/Chat';
// import CulturalShowcase from './components/CulturalShowcase';
import Loading from './components/common/Loading';
// Services
import authService from './services/authService';
import IndiaMap from './components/IndiaMap';
import Map from './components/Map';
import CulturalSites from './components/CulturalSites';
import Guides from './components/Guides.jsx';

interface User {
  _id: string;
  name: string;
  email: string;
  culturalProfile: {
    state: string;
    city: string;
    primaryLanguages: string[];
    bio: string;
  };
  gamification: {
    points: number;
    level: number;
  };
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await authService.getCurrentUser();
          setUser(userData.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData.user);
    setIsAuthenticated(true);
    localStorage.setItem('token', userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register onLogin={handleLogin} />} />
          <Route path="/guides" element={isAuthenticated ? <Navigate to="/guides" /> : <Guides />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/discover" element={isAuthenticated ? <Discover user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/matches" element={isAuthenticated ? <Matches user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/chat" element={isAuthenticated ? <Chat user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/indiamap" element={isAuthenticated ? <Map   /> : <Navigate to="/" />} />
          <Route path="/culturalsites" element={isAuthenticated ? <CulturalSites   /> : <Navigate to="/" />} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
