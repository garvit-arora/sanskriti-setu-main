import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface User {
  _id: string;
  name: string;
  culturalProfile: {
    state: string;
    city: string;
  };
  gamification: {
    points: number;
    level: number;
  };
}

interface DashboardProps {
  user: User | null;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-900">Sanskriti Setu</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/discover" className="text-gray-700 hover:text-orange-600">Discover</Link>
              <Link to="/matches" className="text-gray-700 hover:text-orange-600">Matches</Link>
              <Link to="/chat" className="text-gray-700 hover:text-orange-600">Chat</Link>
              <Link to="/indiamap" className="text-gray-700 hover:text-orange-600">KYC</Link>
              <Link to="/profile" className="text-gray-700 hover:text-orange-600">Profile</Link>
              <button 
                onClick={onLogout}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-orange-100">From {user?.culturalProfile.city}, {user?.culturalProfile.state}</p>
          <div className="mt-4 flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{user?.gamification.points}</div>
              <div className="text-sm text-orange-100">Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{user?.gamification.level}</div>
              <div className="text-sm text-orange-100">Level</div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link 
              to="/discover" 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 block"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Discover People</h3>
              <p className="text-gray-600 text-sm">Find cultural matches</p>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/matches" 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 block"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">My Matches</h3>
              <p className="text-gray-600 text-sm">View your connections</p>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/cultural-showcase" 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 block"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Showcase</h3>
              <p className="text-gray-600 text-sm">Share your heritage</p>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/chat" 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 block"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Chat</h3>
              <p className="text-gray-600 text-sm">Continue conversations</p>
            </Link>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Cultural Exchange Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-sm">🎪</span>
              </div>
              <div>
                <p className="font-medium">Someone liked your Ganesh Chaturthi post</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-sm">🤝</span>
              </div>
              <div>
                <p className="font-medium">New cultural match from Punjab!</p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-sm">⭐</span>
              </div>
              <div>
                <p className="font-medium">You earned the "Cultural Ambassador" badge!</p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
