import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FarmerProfile from './pages/FarmerProfile';
import ProduceBoard from './pages/ProduceBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/farmer-profile" element={<FarmerProfile />} />
        <Route path="/produce-board" element={<ProduceBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const NotFound = () => <div className="text-center p-8">Page Not Found</div>;

export default App;