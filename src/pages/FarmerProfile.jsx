import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FarmerProfile = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch('https://680a159c1f1a52874cdf18c3.mockapi.io/api/v1/Farmer-profiles');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const farmerData = data.map(farmer => ({
          id: farmer.Field || farmer.id,
          name: farmer.name || 'No name provided',
          age: farmer.Age || 'Age not specified',
          location: farmer.Location || 'Location unknown',
          experience: `${farmer.Experience} years` || 'Experience not listed',
          phone: farmer.PhoneNumber || 'Contact unavailable',
          certification: farmer.Certification || 'No certification listed'
        }));
        
        setFarmers(farmerData);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  if (loading) return (
    <div className="text-center p-8">
      <div className="animate-pulse text-green-600">Loading farmer profiles...</div>
    </div>
  );

  if (error) return (
    <div className="text-center p-8 text-red-500">
      Error loading farmer profiles: {error}
      <div className="mt-4 text-sm text-gray-600">
        Please try refreshing the page or contact support
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-600 hover:text-green-700">
            FARM-TO-BUYER
          </Link>
          <div className="flex gap-6">
            <Link to="/login" className="text-gray-600 hover:text-green-600 transition-colors">
              Login
            </Link>
            <Link to="/farmer-profile" className="text-gray-600 hover:text-green-600 transition-colors">
              Farmer Profile
            </Link>
            <Link to="/produce-board" className="text-gray-600 hover:text-green-600 transition-colors">
              Produce Board
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Farmer Profiles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.map((farmer) => (
            <div key={farmer.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-600">{farmer.name}</h3>
                <p className="text-gray-500">{farmer.location}</p>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Age:</span> {farmer.age}</p>
                <p><span className="font-medium">Experience:</span> {farmer.experience}</p>
                <p>
                  <span className="font-medium">Contact:</span>{" "}
                  <a href={`tel:${farmer.phone}`} className="text-green-600 hover:underline">
                    {farmer.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Certification:</span> {farmer.certification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;