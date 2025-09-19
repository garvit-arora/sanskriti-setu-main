import React from 'react';
import { Link } from 'react-router-dom';

interface RegisterProps {
  onLogin: (userData: any) => void;
}

const Register: React.FC<RegisterProps> = ({ onLogin }) => {
  const handleDemoRegister = () => {
    // Demo registration - create a mock user
    const demoUser = {
      user: {
        _id: 'demo-user-id',
        name: 'Demo User',
        email: 'demo@sanskriti.com',
        culturalProfile: {
          state: 'Maharashtra',
          city: 'Mumbai',
          primaryLanguages: ['Marathi', 'Hindi'],
          bio: 'Passionate about sharing Maharashtrian culture'
        },
        gamification: {
          points: 150,
          level: 2
        }
      },
      token: 'demo-token'
    };
    
    onLogin(demoUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Sanskriti Setu</h2>
          <p className="text-gray-600 mb-8">
            For the demo, we'll create a sample cultural profile for you.
          </p>
          
          <button
            onClick={handleDemoRegister}
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition duration-200 font-medium mb-4"
          >
            Create Demo Profile
          </button>
          
          <div className="text-center">
            <span className="text-sm text-gray-600">Already have an account? </span>
            <Link to="/login" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
              Sign in
            </Link>
          </div>
          
          <div className="mt-6">
            <Link to="/" className="text-sm text-orange-600 hover:text-orange-700">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
