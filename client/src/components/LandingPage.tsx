import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-900">Sanskriti Setu</h1>
              <span className="ml-2 text-sm text-orange-700">संस्कृति सेतु</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-orange-800 hover:text-orange-900 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Bridge Cultures,
            <br />
            <span className="text-orange-600">Build Connections</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with people from different states of India. Learn about their traditions, 
            share your culture, and build meaningful relationships through our cultural exchange platform.
          </p>
          <Link
            to="/register"
            className="bg-orange-600 text-white text-lg px-8 py-4 rounded-xl hover:bg-orange-700 transition duration-200 inline-block"
          >
            Start Your Cultural Journey
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Matching</h3>
            <p className="text-gray-600">
              Get matched with people from different states based on your cultural interests and learning goals.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎭</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage Showcase</h3>
            <p className="text-gray-600">
              Share your local festivals, traditions, recipes, and art forms with people across India.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Learn & Teach</h3>
            <p className="text-gray-600">
              Exchange knowledge about languages, cooking, festivals, and traditions in a fun, interactive way.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">28+</div>
              <div className="text-gray-600">States & UTs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">22+</div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Festivals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600">Connections</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to explore India's rich cultural heritage?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of cultural enthusiasts already connecting and learning.
          </p>
          <Link
            to="/register"
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-lg px-8 py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition duration-200 inline-block"
          >
            Join Sanskriti Setu Today
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Sanskriti Setu</h3>
            <p className="text-gray-400 mb-6">Building bridges across India's diverse cultures</p>
            <div className="text-sm text-gray-500">
              <p>Built for SIH 2024 - Problem Statement ID: 25130</p>
              <p className="mt-2">Student Innovation | Heritage & Culture | AICTE</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
