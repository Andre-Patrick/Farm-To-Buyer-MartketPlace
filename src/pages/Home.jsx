import { Link } from 'react-router-dom';
import CptMorganImage from '../assets/Project-Picture-Farmers/cpt-morgan.jpg';
import JackDanielsImage from '../assets/Project-Picture-Farmers/jack-daniels.jpg';
import JohnnyWalkerImage from '../assets/Project-Picture-Farmers/johnny-walker.jpg';

const Home = () => {
  const farmers = [
    { 
      name: "Cpt Morgan",
      age: 67,
      location: "Shields",
      experience: "46 Years",
      image: CptMorganImage
    },
    { 
      name: "Jack Daniels",
      age: 75,
      location: "Tots",
      experience: "52 Years",
      image: JackDanielsImage
    },
    { 
      name: "Johnny Walker",
      age: 70,
      location: "Northlands",
      experience: "43 Years",
      image: JohnnyWalkerImage
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get Fresh Healthy Produce From Farmers
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Connecting you directly with local farmers for the freshest harvests
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fresh, Affordable Produce",
              content: "Buyers get farm-fresh goods 30–50% cheaper than retail. A $5 basket of organic strawberries straight from the farm? Yes, please!"
            },
            {
              title: "Transparency You Can Trust",
              content: "See exactly who grows your food and how. Browse farmer bios, farming practices (organic, pesticide-free), and harvest dates."
            },
            {
              title: "Support Local Communities",
              content: "Every purchase strengthens your local economy. Help farmers reinvest in sustainable practices and keep money circulating locally."
            }
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-green-600">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Farmers Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Farmers Profiles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {farmers.map((farmer, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 flex items-center justify-center">
                <img 
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-4 text-center">
                {farmer.name}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Age:</span> {farmer.age}</p>
                <p><span className="font-medium">Location:</span> {farmer.location}</p>
                <p><span className="font-medium">Experience:</span> {farmer.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;