import React from 'react';
import { Link } from 'react-router-dom';

interface User { _id: string; name: string; culturalProfile: { state: string; city: string; }; gamification: { points: number; level: number; }; }
interface ProfileProps { user: User | null; onLogout: () => void; }

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-2xl font-bold text-orange-900">Sanskriti Setu</Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="text-gray-700 hover:text-orange-600">Dashboard</Link>
              <button onClick={onLogout} className="bg-orange-600 text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">👤</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-600">{user?.culturalProfile?.city}, {user?.culturalProfile?.state}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Gamification Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Points:</span>
                  <span className="font-bold text-orange-600">{user?.gamification?.points}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className="font-bold text-orange-600">{user?.gamification?.level}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Achievements</h2>
              <div className="text-center py-4">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-gray-600">Cultural Ambassador</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
