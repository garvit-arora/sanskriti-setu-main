exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email, password } = JSON.parse(event.body);

    // Demo credentials for SIH 2024
    if (email === 'demo@sanskriti.com' && password === 'demo123') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: {
            token: 'demo-jwt-token-sih-2024',
            user: {
              _id: 'demo-user-id',
              name: 'SIH Demo User',
              email: 'demo@sanskriti.com',
              culturalProfile: {
                state: 'Maharashtra',
                city: 'Mumbai',
                primaryLanguages: ['Hindi', 'Marathi'],
                bio: 'Cultural enthusiast participating in SIH 2024'
              },
              gamification: {
                points: 1250,
                level: 3
              }
            }
          }
        }),
      };
    }

    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ 
        success: false,
        message: 'Invalid credentials. Use demo@sanskriti.com / demo123' 
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        message: 'Server error',
        error: error.message 
      }),
    };
  }
};
