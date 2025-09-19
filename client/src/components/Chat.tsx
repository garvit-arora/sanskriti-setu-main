import React from 'react';
import { Link } from 'react-router-dom';

interface User { _id: string; name: string; }
interface ChatProps { user: User | null; onLogout: () => void; }

const Chat: React.FC<ChatProps> = ({ user, onLogout }) => {
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cultural Exchange Chat</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-xl font-bold mb-4">Start meaningful conversations</h2>
          <p className="text-gray-600 mb-6">Chat with your cultural matches to exchange traditions, recipes, and stories!</p>
          <Link to="/matches" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">View Your Matches</Link>
        </div>
      </div>
    </div>
  );
};

export default Chat;
