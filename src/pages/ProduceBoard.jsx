import { Link } from 'react-router-dom';

const ProduceBoard = () => {
  const produceItems = [
    { name: 'King Trumpet Mushrooms', price: 2.59, unit: '1/2Kg', farmer: 'Mrs. Dixie Nolan' },
    { name: 'Peas', price: 1.99, unit: '1/2Kg', farmer: 'Julio Dietrich' },
    { name: 'Potato', price: 1.99, unit: '1kg', farmer: 'April Cole DVM' },
    { name: 'Watermelon', price: 3.99, unit: '1kg', farmer: 'Ellen Harris' },
    { name: 'Shiitake Mushroom', price: 2.55, unit: '1kg', farmer: 'Dr. Winston Adams' },
    { name: 'Black Currents', price: 2.99, unit: '1kg', farmer: 'Ben Ryan' },
    { name: 'White Cherries', price: 10.09, unit: '1kg', farmer: 'Tommie Reynolds' },
    { name: 'Organic Apples', price: 3.49, unit: '1kg', farmer: 'Charles Greenfelder' },
    { name: 'Heirloom Tomatoes', price: 4.25, unit: '1kg', farmer: 'Cesar Ankunding' },
    { name: 'Baby Carrots', price: 2.15, unit: '500g', farmer: 'Abel Schoen' },
    { name: 'Rainbow Chard', price: 3.75, unit: 'bunch', farmer: 'Evan Brekke' },
    { name: 'Fresh Basil', price: 1.99, unit: '100g', farmer: 'Hugh Pagac' },
    { name: 'Organic Spinach', price: 2.99, unit: 'bunch', farmer: 'Mrs. Dixie Nolan' },
    { name: 'Kale', price: 3.25, unit: 'bunch', farmer: 'Julio Dietrich' },
    { name: 'Bell Peppers', price: 4.50, unit: '1kg', farmer: 'April Cole DVM' },
    { name: 'Zucchini', price: 2.75, unit: '1kg', farmer: 'Ellen Harris' },
    { name: 'Sweet Corn', price: 1.50, unit: 'ear', farmer: 'Dr. Winston Adams' },
    { name: 'Broccoli', price: 3.15, unit: '1kg', farmer: 'Ben Ryan' },
    { name: 'Cauliflower', price: 3.45, unit: '1kg', farmer: 'Tommie Reynolds' },
    { name: 'Green Beans', price: 4.00, unit: '1kg', farmer: 'Charles Greenfelder' },
    { name: 'Cucumbers', price: 2.25, unit: '1kg', farmer: 'Cesar Ankunding' },
    { name: 'Eggplant', price: 3.75, unit: '1kg', farmer: 'Abel Schoen' },
    { name: 'Garlic', price: 1.99, unit: '100g', farmer: 'Evan Brekke' },
    { name: 'Ginger', price: 2.45, unit: '100g', farmer: 'Hugh Pagac' },
    { name: 'Sweet Potatoes', price: 2.85, unit: '1kg', farmer: 'Mrs. Dixie Nolan' },
    { name: 'Pumpkins', price: 5.99, unit: 'each', farmer: 'Julio Dietrich' },
    { name: 'Blueberries', price: 6.50, unit: '250g', farmer: 'April Cole DVM' },
    { name: 'Raspberries', price: 7.25, unit: '250g', farmer: 'Ellen Harris' },
    { name: 'Strawberries', price: 5.75, unit: '500g', farmer: 'Dr. Winston Adams' },
    { name: 'Lettuce', price: 2.15, unit: 'head', farmer: 'Ben Ryan' },
    { name: 'Cilantro', price: 1.50, unit: 'bunch', farmer: 'Tommie Reynolds' },
    { name: 'Parsley', price: 1.75, unit: 'bunch', farmer: 'Charles Greenfelder' },
    { name: 'Mint', price: 2.00, unit: 'bunch', farmer: 'Cesar Ankunding' },
    { name: 'Rosemary', price: 2.25, unit: 'bunch', farmer: 'Abel Schoen' },
    { name: 'Thyme', price: 2.10, unit: 'bunch', farmer: 'Evan Brekke' },
    { name: 'Asparagus', price: 4.50, unit: '1kg', farmer: 'Hugh Pagac' },
    { name: 'Brussels Sprouts', price: 5.25, unit: '1kg', farmer: 'Mrs. Dixie Nolan' },
    { name: 'Celery', price: 2.95, unit: 'bunch', farmer: 'Julio Dietrich' },
    { name: 'Leeks', price: 3.15, unit: '1kg', farmer: 'April Cole DVM' },
    { name: 'Okra', price: 4.25, unit: '1kg', farmer: 'Ellen Harris' },
    { name: 'Radishes', price: 1.99, unit: 'bunch', farmer: 'Dr. Winston Adams' },
    { name: 'Turnips', price: 2.45, unit: '1kg', farmer: 'Ben Ryan' },
    { name: 'Artichokes', price: 6.75, unit: 'each', farmer: 'Tommie Reynolds' },
    { name: 'Bok Choy', price: 3.95, unit: '1kg', farmer: 'Charles Greenfelder' },
    { name: 'Fennel', price: 4.15, unit: '1kg', farmer: 'Cesar Ankunding' },
    { name: 'Kohlrabi', price: 3.25, unit: '1kg', farmer: 'Abel Schoen' },
    { name: 'Snow Peas', price: 5.50, unit: '500g', farmer: 'Evan Brekke' },
    { name: 'Cherry Tomatoes', price: 4.75, unit: '500g', farmer: 'Hugh Pagac' }
  ];

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

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Available Produce</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produceItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-2xl text-green-600 font-medium">
                ${item.price} <span className="text-sm text-gray-500">per {item.unit}</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Grown by: <span className="text-green-600">{item.farmer}</span>
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProduceBoard;