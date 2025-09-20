import React, { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  culturalProfile: { state: string; city: string };
  gamification: { points: number; level: number };
}

interface ProfileProps {
  user: User | null;
  onLogout: () => void;
  onUpdate?: (updatedUser: User) => void; // optional callback to save changes
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user || null);

  if (!user) return <p>Loading...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!formData) return;

    setFormData({
      ...formData,
      culturalProfile: {
        ...formData.culturalProfile,
        [name]: value,
      },
      ...(name === "name" && { name: value }),
    });
  };

  const handleSave = () => {
    if (formData && onUpdate) {
      onUpdate(formData);
    }
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-2xl font-bold text-orange-900">
                Sanskriti Setu
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="text-gray-700 hover:text-orange-600">
                Dashboard
              </Link>
              <button onClick={onLogout} className="bg-orange-600 text-white px-4 py-2 rounded-lg">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">👤</span>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData?.name || ""}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="city"
                  value={formData?.culturalProfile.city || ""}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                  placeholder="City"
                />
                <input
                  type="text"
                  name="state"
                  value={formData?.culturalProfile.state || ""}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                  placeholder="State"
                />
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">
                  {user.culturalProfile.city}, {user.culturalProfile.state}
                </p>
              </>
            )}
          </div>

          {/* Gamification + Achievements */}
          {!isEditing && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Gamification Stats</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Points:</span>
                    <span className="font-bold text-orange-600">{user.gamification.points}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span className="font-bold text-orange-600">{user.gamification.level}</span>
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
          )}

          {/* Buttons */}
          <div className="mt-8 text-center space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
